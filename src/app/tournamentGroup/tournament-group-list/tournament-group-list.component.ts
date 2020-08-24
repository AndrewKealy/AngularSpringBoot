import {AfterContentInit, Component, OnInit} from '@angular/core';
import { TournamentGroupFilter } from '../tournament-group-filter';
import { TournamentGroupService } from '../tournament-group.service';
import { TournamentGroup } from '../tournament-group';
import { SharedService } from '../../shared/shared.service';
import {OktaAuthService} from '@okta/okta-angular';



@Component({
  selector: 'app-tournament-group',
  templateUrl: 'tournament-group-list.component.html'
})
export class TournamentGroupListComponent implements OnInit, AfterContentInit {

  filter = new TournamentGroupFilter();
  selectedTournamentGroup: TournamentGroup;
  feedback: any = {};
  public  playerGroupIdForTournamentGroup: number;
  public totalNumberOfPlayers: number;
  numberOfPicksInitially: number;
  numberOfPicksMadeByUser: number;
  numberOfPicksMadeByEveryone: number;
  public arePicksAvailableToUser: boolean;
  public arePicksAvailableToAnyone: boolean;
  public revealPositionAndScore: boolean;
  userName: string;
  public finalPlayersAndScore: Map<string, number>;


  get tournamentGroupList(): TournamentGroup[] {
    return this.tournamentGroupService.tournamentGroupList;
  }

  constructor(private tournamentGroupService: TournamentGroupService,
              private sharedService: SharedService,
              private oktaAuthService: OktaAuthService) {
  }

  async ngOnInit() {
    this.sharedService.sharedPlayerGroupIdForTournamentGroup.subscribe(playerGroupIdForTournamentGroup =>
      this.playerGroupIdForTournamentGroup = playerGroupIdForTournamentGroup);
    this.filter.playerGroupFilter = this.playerGroupIdForTournamentGroup.toString();
    const userClaims = await this.oktaAuthService.getUser();
    this.userName = userClaims.preferred_username;
    this.sharedService.sharedTotalNumberOfPlayers.subscribe(totalNumberOfPlayers => this.totalNumberOfPlayers = totalNumberOfPlayers);
    this.numberOfPicksInitially = this.calculateNumberOfPicks(this.totalNumberOfPlayers);
    this.search();

  }
  /*
  Once the table data has been loaded,
  the following method checks to see if the user and other users
  have already made all their choices
   */
  async ngAfterContentInit() {
    const userClaims = await this.oktaAuthService.getUser();
    this.userName = userClaims.preferred_username;
    this.setRemainingPicks();
  }

  search(): void {
    this.tournamentGroupService.load(this.filter);
  }

  select(selected: TournamentGroup): void {
    this.selectedTournamentGroup = selected;
  }

  delete(tournamentGroup: TournamentGroup): void {
    if (confirm('Are you sure?')) {
      this.tournamentGroupService.delete(tournamentGroup).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
  newPlayerGroupIdAndTotalMembers(playerGroupId: string, totalNumberOfMembers: number) {
    this.sharedService.nextPlayerGroupId(playerGroupId);
    this.sharedService.nextTotalNumberOfPlayers((totalNumberOfMembers));
  }

  /*
  A function that returns the number of picks per player
  depending on the max size of the group
   */
   calculateNumberOfPicks(totalNumberOfMembers: number): number  {

      switch (totalNumberOfMembers) {
        case 1:
          return 6;
        case 2:
          return 6;
        case 4:
          return 4;
        case 6:
          return 3;
        default:
          return 2;
      }
    }

    setRemainingPicks() {
      this.numberOfPicksMadeByUser = 0;
      this.numberOfPicksMadeByEveryone = 0;
      console.log('Set remaining picks being called');
      console.log('username: ' + this.userName);
      for (const item of this.tournamentGroupList) {
        if (item.pickedByUsername === this.userName) {
          this.numberOfPicksMadeByUser += 1;
        }

        if (item.isPicked === true) {
          this.numberOfPicksMadeByEveryone += 1;
        }
      }
      this.arePicksAvailableToUser = this.numberOfPicksMadeByUser < this.numberOfPicksInitially;
      this.arePicksAvailableToAnyone = this.numberOfPicksMadeByEveryone < (this.totalNumberOfPlayers * this.numberOfPicksInitially);
    }
    /*
    The following function provide the logic that checks the scores of golfers,
    and awards points to players, once all selections have been made
     */

    playGame() {
     this.revealPositionAndScore = true;
     const playersAndScores = new Map();
     let playerPoints = 0;
     for (const item of this.tournamentGroupList) {
        if (item.isPicked) {
          playerPoints = this.getPointsFromPosition(item.tournamentPosition);
          const player = item.pickedByUsername;
          if (playersAndScores.has(player)) {
            let score = playersAndScores.get(player);
            score += playerPoints;
            playersAndScores.set(player, score);
          } else {
            playersAndScores.set(player, playerPoints);
          }
        }
      }
     this.finalPlayersAndScore = playersAndScores;

    }

    /*
    This function takes a players ranking in a tournament
    and returns the amount of points a player should be awarded
    */
    getPointsFromPosition(position: number) {
      switch (position) {
        case 1:
          return 10;
        case 2:
          return 8;
        case 3 - 6:
          return 6;
        case 7 - 12:
          return 4;
        case 13 - 20:
          return 2;
        default:
          return 2;
      }
    }

}

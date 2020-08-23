export class TournamentGroup {
  tournamentGroupPrimaryKey: number;
  tournamentGroupId: TournamentGroupId;
  playerGroupFilter: number;
  golferId: number;
  golferFirstName: string;
  golferSecondName: string;
  golferImageUrl: string;
  golferNationality: string;
  oddsToOne: number;
  tournamentPosition: number;
  finalScore: number;
  pickedById: number;
  pickedByUsername: string;
  isPicked: boolean;
}

export class TournamentGroupId {
  tournamentEnrollmentForeignId: number;
  playerGroupForeignId: number;
}

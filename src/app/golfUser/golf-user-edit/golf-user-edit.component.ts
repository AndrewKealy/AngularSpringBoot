import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GolfUserService } from '../golf-user.service';
import { GolfUser } from '../golf-user';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-golf-user-edit',
  templateUrl: './golf-user-edit.component.html'
})
export class GolfUserEditComponent implements OnInit {

  id: string;
  golfUser: GolfUser;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private golfUserService: GolfUserService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new GolfUser()); }
          return this.golfUserService.findById(id);
        })
      )
      .subscribe(golfUser => {
          this.golfUser = golfUser;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.golfUserService.save(this.golfUser).subscribe(
      golfUser => {
        this.golfUser = golfUser;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/golfUsers']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/golfUsers']);
  }
}

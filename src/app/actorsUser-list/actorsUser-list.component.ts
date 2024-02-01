import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../services/user.service";
import {Actor} from "../dto/actor";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-actorsUser-list',
  templateUrl: './actorsUser-list.html',
  styleUrls: ['./actorsUser-list.component.scss']
})
export class UserActorListComponent implements OnInit {
  userId: number = 1;
  userActors: Actor[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.userId = +params.get('id')!;
          return this.userService.getActorsByUserId(this.userId);
        })
      )
      .subscribe((data) => {
        this.userActors = data;
      });
  }
}

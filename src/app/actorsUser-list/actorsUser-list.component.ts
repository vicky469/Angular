import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../services/user.service";
import {switchMap} from "rxjs";
import {User} from "../dto/user";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  userId: number = 0;
  user: User | null = null;

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
          return this.userService.getUserDetail(this.userId);
        })
      )
      .subscribe((data) => {
        this.user = data;
      });
  }
}

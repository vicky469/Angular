import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../services/user.service";
import {ActorItem} from "../dto/actor";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  userId: number = 0;
  actorId: number = 0;
  items: ActorItem[] = [];

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.userId = +params.get('home')!;
          return this.userService.getActorItemsByUserActorIds(this.userId, this.actorId);
        })
      )
      .subscribe((data) => {
        this.items = data;
      });
  }
}

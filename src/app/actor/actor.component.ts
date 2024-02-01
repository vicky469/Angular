import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {Actor} from "../dto/actor";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styles: [],
})
export class ActorComponent implements OnInit {
  userId: number = 0;
  actorId: number = 0;
  @Input() actor!: Actor;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
  }


  ngOnInit(): void {
  }
}

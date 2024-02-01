import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styles: [],
})
export class ActorComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
  }
}

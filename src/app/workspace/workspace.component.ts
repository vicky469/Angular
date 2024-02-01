import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  //id: number = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //   this.route.paramMap.subscribe((params: ParamMap) => {
    //     this.id = +params.get('id')!;
    //   });
  }
}

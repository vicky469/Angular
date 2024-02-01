import {Component} from '@angular/core';
import {User} from "../dto/user";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../services/user.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
          let userId = params.get('id');
          this.userId = userId ? +userId : this.userId;
          return this.userService.getUserDetail(this.userId);
        })
      )
      .subscribe((data) => {
        this.user = data;
      });
  }
}

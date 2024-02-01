import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HabitDetailComponent} from './habit-detail/habit-detail.component';
import {HabitListComponent} from './habit-list/habit-list.component';
import {HabitItemComponent} from './habit-item/habit-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HabitFormComponent} from './habit-form/habit-form.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserActorListComponent} from './actorsUser-list/actorsUser-list.component';
import {ActorComponent} from './actor/actor.component';
import {ActorDetailComponent} from './actor-detail/actor-detail.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home/:id',
    component: HomeComponent,
    children: [
      {path: 'actors', component: UserActorListComponent},
      {path: 'actor/:id', component: ActorDetailComponent},
    ]
  },
  // {path: 'actors', component: UserActorListComponent},
  {path: 'habits', component: HabitListComponent},
  {path: 'workspace', component: WorkspaceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HabitDetailComponent,
    HabitListComponent,
    HabitItemComponent,
    HabitFormComponent,
    UserActorListComponent,
    ActorComponent,
    ActorDetailComponent,
    WorkspaceComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

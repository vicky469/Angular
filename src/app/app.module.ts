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
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HabitDetailComponent,
    HabitListComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    AccountComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

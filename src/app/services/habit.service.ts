import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Habit} from "./habit";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('https://localhost:7264/api/habits');
  }

  addHabit(newHabit: Habit): Observable<Habit> {
    return this.http
      .post<Habit>('https://localhost:7264/api/habit', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}

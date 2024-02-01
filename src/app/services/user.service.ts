import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {users} from "./data";
import {User} from "../dto/user";
import {Actor, ActorItem} from "../dto/actor";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserDetail(id: number): Observable<User> {
    //return this.http.get<User>('https://localhost:7264/api/user/{id}');
    return of(users[id]);
  }

  getActorsByUserId(id: number): Observable<Actor[]> {
    //return this.http.get<User>('https://localhost:7264/api/user/{id}');
    return of(users[id].actors);
  }

  getActorByUserActorIds(userId: number, actorId: number): Observable<Actor> {
    //return this.http.get<User>('https://localhost:7264/api/user/{id}');
    return of(users[userId].actors[actorId]);
  }

  getActorItemsByUserActorIds(userId: number, actorId: number): Observable<ActorItem[]> {
    //return this.http.get<User>('https://localhost:7264/api/user/{id}');
    return of(users[userId].actors[actorId].items);
  }
}

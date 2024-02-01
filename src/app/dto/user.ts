import {Actor} from "./actor";

export interface User {
  id: number;
  username: string;
  actors: Actor[];
}

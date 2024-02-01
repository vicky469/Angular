export interface Actor {
  id: number;
  name: string;
  description: string;
  info: string;
  items: ActorItem[];
}

export interface ActorItem {
  name: string;
  description: string;
}

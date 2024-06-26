export interface Habit {
  id: number;
  title: string;
  count: number;
  streak?: boolean;  // UI computed property
}

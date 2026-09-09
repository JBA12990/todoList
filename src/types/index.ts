export interface DefalutList {
  id: number;
  type: string;
  tasks: ListTask[];
}

export interface ListTask {
  id: number;
  type: string;
  completed: boolean;
}

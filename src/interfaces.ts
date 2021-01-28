export interface IList {
  id: number;
  task: string;
  finished: boolean;
}

export interface IToDo {
  name: string;
  task: string;
  list: IList[];
}

export interface IStore {
  todos: IToDo[];
  name: string;
  loading: boolean;
}

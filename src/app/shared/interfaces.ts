export interface User {
  username: string;
  password: string;
}

export interface Todoitem {
  id?: number;
  status: string;
  created: Date;
  content: string;
}

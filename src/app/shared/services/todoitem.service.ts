import {Injectable} from '@angular/core';
import {Todoitem} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getAll(): Observable<Todoitem[]> {
    return this.http.get<Todoitem[]>(`http://localhost:8077/api/todoitem/all`);
  }
  create(content: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8077/api/todoitem/create`, content);
  }
}

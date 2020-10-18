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
    return this.http.get<Todoitem[]>(`/api/todoitem/all`);
  }
  getOne(id: number): Observable<Todoitem> {
    return this.http.get<Todoitem>(`/api/todoitem/${id}`);
  }
  update(todoitem: Todoitem): Observable<Todoitem> {
    return this.http.post<Todoitem>(`/api/todoitem/update`, todoitem);
  }
  create(content: string): Observable<any> {
    return this.http.post<any>(`/api/todoitem/create`, content);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`/api/todoitem/${id}`);
  }
}

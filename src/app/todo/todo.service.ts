import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UUID } from 'angular2-uuid';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // 定义你的假WebAPI地址，这个定义成什么都无所谓
  // 只要确保是无法访问的地址就好
  private apiUrl = 'http://localhost:3000/todos';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // POST /todos
  addTodo(desc: string): Observable<Todo> {
    const todo = {
      id: UUID.UUID(),
      desc,
      completed: false
    };
    return this.http
      .post<Todo>(this.apiUrl, JSON.stringify(todo), { headers: this.headers }).pipe(
        catchError(this.handleError)
      );

  }
  // PUT /todos/:id
  toggleTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    console.log(url);
    const updatedTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http
      .put<Todo>(url, JSON.stringify(updatedTodo), { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  // DELETE /todos/:id
  deleteTodoById(id: string): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete<Todo>(url, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  // GET /todos
  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

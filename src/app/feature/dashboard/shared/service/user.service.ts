import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = environment.endpoint

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  createUser(body: User): Observable<User> {
    return this.http.post<User>(this.URL + '/usuarios/', JSON.stringify(body), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/usuarios/')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Obtener respuesta del error
      errorMessage = `Codigo Error: ${error.status}\n Mensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

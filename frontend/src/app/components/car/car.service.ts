import { map, catchError } from 'rxjs/operators';
import { Car } from './car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = "http://localhost:3001/cars"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ?  ['msg-error'] : ['msg-success']
    })
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl)
  }

  readById(id: Number): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Car>(url)
  }

  update(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/${car.id}`
    return this.http.put<Car>(url, car)
  }

  delete(id: Number): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Car>(url)
  }

}

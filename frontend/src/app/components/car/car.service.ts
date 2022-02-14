import { Car } from './car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = "http://localhost:3001/cars"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car)
  }

  read(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl)
  }

  readById(id: string): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Car>(url)
  }

  update(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/${car.id}`
    return this.http.put<Car>(url, car)
  }

  delete(id: String): Observable<Car> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Car>(url)
  }

}

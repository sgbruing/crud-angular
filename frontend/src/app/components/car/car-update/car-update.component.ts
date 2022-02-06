import { Car } from './../car.model';
import { Router } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car: Car = {
    name: "Chevrolet Celta",
    year: 2004,
    color: "Azul Santorini",
    horsepower: 77,
    cylinders: 4,
    engine_capacity: 1.0,
    price: 13.0
  }

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  updateCar(): void {

  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

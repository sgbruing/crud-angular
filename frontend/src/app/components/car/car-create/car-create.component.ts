import { Car } from './../car.model';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Car = {
    name: "",
    year: null,
    color: "",
    horsepower: null,
    cylinders: null,
    engine_capacity: null,
    price: null
  }

  constructor(private CarService: CarService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCar(): void {
    this.CarService.create(this.car).subscribe(() => {
      this.CarService.showMessage('Carro adicionado com sucesso!!')
      this.router.navigate(['/cars'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

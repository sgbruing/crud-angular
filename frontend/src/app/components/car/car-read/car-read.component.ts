import { CarService } from './../car.service';
import { Car } from './../car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  cars: Car[]

  constructor(private CarService: CarService) { }

  ngOnInit(): void {

    this.CarService.read().subscribe(cars => {
      this.cars = cars
      console.log(cars)
    })

  }

}

import { CarService } from './../car.service';
import { Car } from './../car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  car: Car

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    const id = '1'
    this.carService.readById(id).subscribe(car => {
      this.car = car
    })
  }

  deleteCar(): void {

  }

  cancel(): void {

  }

}

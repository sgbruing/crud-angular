import { Router } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  updateCar(): void {

  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

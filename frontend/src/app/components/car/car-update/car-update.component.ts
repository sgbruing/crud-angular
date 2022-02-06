import { Car } from './../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car: Car

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.carService.readById(id).subscribe(car => {
      this.car = car
    })
  }

  updateCar(): void {

  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

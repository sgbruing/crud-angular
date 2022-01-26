import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  constructor(private CarService: CarService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCar(): void {
    this.CarService.showMessage('Carro adicionado com sucesso!!')
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

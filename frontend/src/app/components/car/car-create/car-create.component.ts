import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  constructor(private CarService: CarService) { }

  ngOnInit(): void {
  }

  createCar(): void {
    this.CarService.showMessage('Operação Executada com Sucesso!')
  }

}

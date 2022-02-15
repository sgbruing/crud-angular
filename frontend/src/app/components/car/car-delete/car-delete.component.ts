import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.readById(id).subscribe(car => {
      this.car = car
    })
  }

  deleteCar(): void {
    this.carService.delete(this.car.id).subscribe(() => {
      this.carService.showMessage('Carro excluido com sucesso!')
      this.router.navigate(['/cars'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

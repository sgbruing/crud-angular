import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CarCrudComponent } from './views/car-crud/car-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "cars",
  component: CarCrudComponent
},
{
  path: "car/create",
  component: CarCreateComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

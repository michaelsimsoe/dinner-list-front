import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';

const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesRoutingModule {}

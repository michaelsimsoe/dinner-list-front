import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesComponent } from './dishes/dishes.component';
import { DishesRoutingModule } from './dishes-routing.module';

@NgModule({
  declarations: [DishesComponent],
  imports: [CommonModule, DishesRoutingModule],
})
export class DishesModule {}

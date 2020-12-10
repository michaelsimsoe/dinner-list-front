import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { MaterialModule } from '../shared/material.module';
import { ActiveListComponent } from './active-list/active-list.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ActiveListComponent, ListComponent],
  imports: [CommonModule, MaterialModule, ListRoutingModule],
})
export class ListModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveListComponent } from './active-list/active-list.component';
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: ActiveListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'lister',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'retter',
    loadChildren: () =>
      import('./dishes/dishes.module').then((m) => m.DishesModule),
  },
  { path: '**', redirectTo: 'lister' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

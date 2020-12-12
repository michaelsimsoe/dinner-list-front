import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { IndexRoutingModule } from './index-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    IndexRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class IndexModule {}

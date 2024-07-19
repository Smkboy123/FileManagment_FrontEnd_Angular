import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TakeTicketComponent } from './components/take-ticket/take-ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : 'login', component: LoginComponent},
  { path: 'service', component: ServiceComponent },
  {path:'tickets', component : TicketComponent},
  {path:'ticket', component : TakeTicketComponent},
  

  {path: '', redirectTo: '/service', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavbarComponent },
  {path : 'login', component: LoginComponent},
  {path : 'inscription', component: InscriptionComponent},
  {path : 'users', component: UtilisateurComponent},
  {path: 'service', component: ServiceComponent },
  {path:'tickets', component : TicketComponent},
  {path:'ticket-form', component : TicketFormComponent},
  { path: 'ticket/:id', component: TicketDetailsComponent },
  // {path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

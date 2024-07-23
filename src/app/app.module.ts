import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './components/service/service.component'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketComponent } from './components/ticket/ticket.component';

import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ServiceComponent,
    NavbarComponent,
    TicketComponent,
    TicketFormComponent,
    TicketDetailsComponent,
    InscriptionComponent,
    UtilisateurComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

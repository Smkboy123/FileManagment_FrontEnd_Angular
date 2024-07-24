import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { Ticket } from '../../models/ticket.model';
import { StatutTicket } from '../../models/ticket.model';  // Importer l'énumération
import { TicketIdService } from 'src/app/services/ticket-data';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  nom: string = '';
  telephone: string = '';
  selectedServiceId: number | null = null;
  services: Service[] = [];

  constructor(
    private ticketService: TicketService,
    private serviceService: ServiceService,
    private router: Router,
    public ticketDataService: TicketIdService

  ) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(
      (data: Service[]) => {
        this.services = data;
      },
      (error) => {
        console.error('Error fetching services', error);
      }
    );
  }

  onSubmit(): void {
    if (this.nom && this.telephone && this.selectedServiceId !== null) {
  
      const newTicket: Ticket = {
        idTicket: 0,
        status: StatutTicket.EN_COURS,  // Utilisation correcte de l'énumération
        numeroTicket: '',
        heurePrise: new Date(),
        telephonne: this.telephone,
        nom: this.nom,  // Assurez-vous que le champ nom est initialisé
        // utilisateur: { idUtilisateur: 0, username: '', prenom: '', password: '', email: '', telephonne: '' },
        fileAttente: null,
        serviceModel: { idService: this.selectedServiceId, nomService: '', description: '' } as Service
      };

      if (this.nom && this.telephone && this.selectedServiceId !== null) {
        this.ticketService.creerTicketSimple(this.nom, this.telephone, this.selectedServiceId).subscribe(
          (response: Ticket) => {
            this.ticketDataService.setTicketId(response.idTicket); // Stocker l'identifiant du ticket
            console.log('Ticket created successfully', response);
            this.router.navigate(['/ticket', response.idTicket]);
          },
          (error) => {
            console.error('Error creating ticket', error);
          }
        );
    }
  }
}}

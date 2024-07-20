// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ticket-form',
//   templateUrl: './ticket-form.component.html',
//   styleUrls: ['./ticket-form.component.css']
// })
// export class TicketFormComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { Ticket } from '../../models/ticket.model';
import { Utilisateur } from '../../models/utilisateur.model';

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
    private router: Router
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
        status: '',
        numeroTicket: '',
        heurePrise: new Date(),
        telephonne: this.telephone,
        utilisateur: { } as Utilisateur,
        fileAttente: { },
        serviceModel: { idService: this.selectedServiceId, nomService: '', description: '' } as Service
      };

      this.ticketService.creerTicket(1, this.selectedServiceId, newTicket).subscribe(
        (response: Ticket) => {
          console.log('Ticket created successfully', response);
          this.router.navigate(['/ticket', response.idTicket]);
        },
        (error) => {
          console.error('Error creating ticket', error);
        }
      );
    }
  }
}

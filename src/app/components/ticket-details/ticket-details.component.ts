import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ServiceService } from '../../services/service.service';
import { Ticket } from '../../models/ticket.model';
import { Service } from '../../models/service.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket | undefined;
  services: Service[] = [];
  nom: string = '';
  telephone: string = '';

  selectedService: Service | null = null;
  selectedTicket: Ticket | null = null;

  position: number | undefined;
  isEditing = false;
  ticketId: any;
  constructor(
    private ticketService: TicketService,
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTicketDetails(this.ticketId);
    this.getServices();
  }

  getTicketDetails(id: number): void {
    this.ticketService.getTicketById(id).subscribe(
      (ticket: Ticket) => {
        this.ticket = ticket;
        this.getPosition(ticket.idTicket);
      },
      (error) => {

        console.log('Error fetching ticket details', error);
      }
    );
  }

  getPosition(id: number): void {
    this.ticketService.getPosition(id).subscribe(
      (position: number) => {
        this.position = position;
      },
      (error) => {
        console.error('Error fetching ticket position', error);
      }
    );
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(
      (data: Service[]) => {
        this.services = data;
      },
      (error) => {
        console.error('Erreur de chargement des services', error);
      }
    );
  }

  editTicket(): void {
    this.isEditing = true;
  }

  onSubmit(): void {

    console.log("id Tick ", this.ticket?.idTicket, "Service id ", this.ticket?.serviceModel.idService, " -");


    if (this.selectedTicket) {
      this.ticketService.modifierTicket(this.selectedTicket.idTicket, this.selectedTicket.serviceModel.idService, this.selectedTicket).subscribe(
        (response) => {
          this.getTicketDetails(this.ticketId);
          this.selectedTicket = null;
          this.toastr.success('Ticket modifié', 'Succès');
        },
        (error) => {
          console.error('Error updating ticket', error);
        }
      );
    }
  }

  annulerTicket(): void {
    if (confirm("Êtes-vous sur d'annuler le ticket ?")) {
      if (this.ticket) {
        this.ticketService.annulerTicket(this.ticket.idTicket).subscribe(
          () => {
            this.toastr.warning("Attention","Ticket annuler avec success")
            console.log('Ticket canceled successfully');
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error canceling ticket', error);
          }
        );
      }
    }
  }
  modifierTicket(ticket: Ticket): void {
    this.selectedTicket = { ...ticket };
  }

}

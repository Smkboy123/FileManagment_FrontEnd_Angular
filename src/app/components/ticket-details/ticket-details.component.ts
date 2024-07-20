import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ServiceService } from '../../services/service.service';
import { Ticket } from '../../models/ticket.model';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket | undefined;
  services: Service[] = [];
  position: number | undefined;
  isEditing = false;

  constructor(
    private ticketService: TicketService,
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const ticketId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTicketDetails(ticketId);
    this.getServices();
  }

  getTicketDetails(id: number): void {
    this.ticketService.getTicketById(id).subscribe(
      (ticket: Ticket) => {
        this.ticket = ticket;
        this.getPosition(ticket.idTicket);
      },
      (error) => {
        console.error('Error fetching ticket details', error);
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
        console.error('Error fetching services', error);
      }
    );
  }

  editTicket(): void {
    this.isEditing = true;
  }

  onSubmit(): void {
    if (this.ticket) {
      this.ticketService.modifierTicket(this.ticket.idTicket, this.ticket.serviceModel.idService, this.ticket).subscribe(
        (response) => {
          console.log('Ticket updated successfully', response);
          this.isEditing = false;
        },
        (error) => {
          console.error('Error updating ticket', error);
        }
      );
    }
  }

  annulerTicket(): void {
    if (this.ticket) {
      this.ticketService.annulerTicket(this.ticket.idTicket).subscribe(
        () => {
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

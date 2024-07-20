import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets: Ticket[]=[]
  id!:number
  ticket!: Ticket

  constructor(private ticketService: TicketService){

  }

  ngOnInit(): void {
      this.ticketService.toutlesTickets().subscribe(data=>{
        this.tickets=data;
      });

      this.ticketService.getPosition(this.ticket.idTicket).subscribe(data=>{
        this.id=data;
      })
  };
  
}

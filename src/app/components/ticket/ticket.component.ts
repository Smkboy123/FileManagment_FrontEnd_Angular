import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets: Ticket[]=[];


  constructor(private ticketService: TicketService){

  }

  ngOnInit(): void {
      this.ticketService.getTickets().subscribe(data=>{
        this.tickets=data;
      });
  };

}

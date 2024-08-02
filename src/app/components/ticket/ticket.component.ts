import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets: Ticket[]=[]
  id!:number
  ticket!: Ticket
  user: any;
  isConnect: boolean = false

  constructor(private ticketService: TicketService,private tokenStorage: TokenStorageService, private toastr: ToastrService,){

  }

  ngOnInit(): void {

    this.user = this.tokenStorage.getUser();
    if (this.user.token != undefined) {
      this.isConnect = false
    } else {
      this.isConnect = true
    }
    this.getAllTicket();

      this.ticketService.getPosition(this.ticket.idTicket).subscribe(data=>{
        this.id=data;
      })
  };

  getAllTicket(){
      this.ticketService.toutlesTickets().subscribe(data=>{
        this.tickets=data;
      });
  }
  
  deleteTicket(id:any):void{
    if(confirm("La personne à été servi ?")){
      this.toastr.success('Ticket', 'ticket servi avec succès');
this.ticketService.annulerTicket(id).subscribe(data =>{
  this.getAllTicket();
})
    }

  }

}

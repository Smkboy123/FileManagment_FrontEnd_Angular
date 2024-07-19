import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/ticket/list';

  constructor(private http: HttpClient ) { }

    getTickets(): Observable<Array<Ticket>>{
      return this.http.get<Array<Ticket>>(this.apiUrl)
    }

}

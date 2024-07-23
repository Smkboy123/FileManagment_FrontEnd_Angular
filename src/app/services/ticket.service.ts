import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiServerUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  public creerTicket(idUser: number, idService: number, ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiServerUrl}/ticket/creer?idUser=${idUser}&idService=${idService}`, ticket);
  }

  public modifierTicket(idUtilisateur: number, idService: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiServerUrl}/ticket/modifier?idUtilisateur=${idUtilisateur}&idService=${idService}`, ticket);
  }

  public annulerTicket(idTicket: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ticket/annuler/${idTicket}`);
  }

  public toutlesTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiServerUrl}/ticket/list`);
  }
  public getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiServerUrl}/ticket/${id}`);
  }
  
  public getPosition(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/ticket/position/${id}`);
  }
  public creerTicketSimple(nom: string, telephone: string, idService: number): Observable<Ticket> {
    const params = new HttpParams()
      .set('nom', nom)
      .set('telephone', telephone)
      .set('idService', idService.toString());

    return this.http.post<Ticket>(`${this.apiServerUrl}/ticket/creerSimple`, null, { params });
  }
}

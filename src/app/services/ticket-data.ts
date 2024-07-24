import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketIdService {
  private readonly STORAGE_KEY = 'ticketId';

  setTicketId(id: number) {
    localStorage.setItem(this.STORAGE_KEY, id.toString());
  }

  getTicketId(): number | null {
    const storedId = localStorage.getItem(this.STORAGE_KEY);
    return storedId ? parseInt(storedId, 10) : null;
  }

  clearTicketId() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

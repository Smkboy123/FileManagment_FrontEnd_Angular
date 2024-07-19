export interface Ticket {
     idTicket: number;
     status: StatutTicket;
     numeroTicket: string;
     heurePrise: Date;
     telephonne: string;
}

enum StatutTicket {
    EN_COURS,
    TERMINE,
    ANNULE
}
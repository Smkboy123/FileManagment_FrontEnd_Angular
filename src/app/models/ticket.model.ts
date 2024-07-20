export interface Ticket {
    idTicket: number;
    status: string;
    numeroTicket: string;
    heurePrise: Date;
    telephonne: string;
    utilisateur: any;  
    fileAttente: any;  
    serviceModel: any;
  }
  
enum StatutTicket {
    EN_COURS='Encours',
    TERMINE='SERVI',
    ANNULE='ANNULER'
}
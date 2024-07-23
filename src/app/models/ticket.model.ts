import { Service } from "./service.model";

export interface Ticket {
    idTicket: number;
    status: String;
    numeroTicket: string;
    heurePrise: Date;
    nom: String;
    telephonne: string;
    fileAttente: any;  
    serviceModel: Service;
  }
  
export enum StatutTicket {
  EN_COURS = 'EN_COURS',
  TERMINE = 'TERMINE',
  ANNULE = 'ANNULE'
}

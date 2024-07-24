import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketIdService } from 'src/app/services/ticket-data';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  logoStyle: any = "navbar-brand mx-3 font-weight-bold ";
  connect = "connexion"
  deconnexion = "disconect"
  user: any;
  isConnect: boolean = false;
  ticketId:any;

  constructor(
    private ticketDataService: TicketIdService,
    private router: Router, private tokenStorage: TokenStorageService,) {

  }
  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    if (this.user.token != undefined) {
      this.isConnect = false
    } else {
      this.isConnect = true
    }

    this.ticketId = this.ticketDataService.getTicketId()
  }
  deconnexionU() {
    this.tokenStorage.signOut();
    this.router.navigate(['/home']);
  }
}

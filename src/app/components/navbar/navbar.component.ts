import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


logoStyle: any ="navbar-brand mx-3 font-weight-bold ";
  connect="login"
  deconnexion = "disconect"
  user: any;
  isConnect:boolean = false

  constructor(private tokenStorage:TokenStorageService,){

  }
  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    if(this.user.token != undefined){
        this.isConnect = false
    }else{
        this.isConnect = true
    }
  }
  deconnexionU(){
    console.log("::::::::::::::");
   // this.tokenStorage.signOut();    
  }
}

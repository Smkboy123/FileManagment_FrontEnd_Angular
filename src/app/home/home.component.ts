import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor() { }

  logoStyle: any ="navbar-brand mx-3 font-weight-bold ";
  connect="login"

  ngOnInit(): void { }
}

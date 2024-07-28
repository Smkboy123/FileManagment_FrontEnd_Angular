// utilisateur.component.ts
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  
  constructor(private utilisateurService: UtilisateurService,private router: Router) { }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(
      (data: Utilisateur[]) => {
        this.utilisateurs = data;
      },
      (error: any) => {
        console.error('Error fetching utilisateurs', error);
      }
    );
  }
  ifaddclic():void{
    this.router.navigate(['/inscription']);
  }
}

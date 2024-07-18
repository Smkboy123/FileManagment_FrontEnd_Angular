
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { NgModule} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Logique de soumission du formulaire
    console.log('Nom d\'utilisateur:', this.username);
    console.log('Mot de passe:', this.password);
    // Appel à un service pour vérifier les identifiants, etc.
  }
  // onSubmit(): void {
  //   this.authService.login(this.username, this.password).subscribe(
  //     response => {
  //       console.log('Connecté avec succès');
  //       localStorage.setItem('currentUser', JSON.stringify(response));
  //       this.router.navigate(['/']);  // Redirige vers la page d'accueil ou une autre page appropriée
  //     },
  //     error => {
  //       console.error('Nom d\'utilisateur ou mot de passe incorrect');
  //       // Affichez un message d'erreur à l'utilisateur, par exemple
  //     }
  //   );
  // }
}

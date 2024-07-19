
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
  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Connecté avec succès');
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/']);  // Redirige vers la page d'accueil ou une autre page appropriée
      },
      error => {
        console.error('Nom d\'utilisateur ou mot de passe incorrect');
        // Affichez un message d'erreur à l'utilisateur, par exemple
      }
    );
  }
}

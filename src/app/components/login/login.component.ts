
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
              private route: Router, 
              private authService: AuthService, 
              private toastr: ToastrService,
              private tokenStorage: TokenStorageService) { }


  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if (this.isLoggedIn == true) {
          this.toastr.success('Succès', 'Utilisateur connecté');
          this.route.navigateByUrl("/tickets");
        }
        else {
          this.toastr.error('Hello world!', 'Toastr fun!');
          this.isLoginFailed = true;
        }
      },
      err => {
        this.toastr.error('Oups', "Username ou mot de passe incorrect !");

        this.isLoginFailed = true;
        this.errorMessage = err.error.message;

      }
    );
  }

  /* onSubmit(): void {
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
   }*/
}

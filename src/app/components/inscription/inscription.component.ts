// import { Component } from '@angular/core';
// import { Utilisateur } from 'src/app/models/utilisateur.model';

// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.css']
// })
// export class InscriptionComponent {
//   utilisateur!: Utilisateur;
//     idUtilisateur: number=0
//     username: String =''
//     prenom : String=''
//     password: String=''
//     email: String=''
//     telephone: String=''


//   onSubmit():void{

//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  username!: string;
  prenom!:string
  password!: string;
  telephone!: string;
  email!:string;

  constructor(private toastr: ToastrService,private http: HttpClient, private router: Router) { }

  private apiUsersUrl = 'http://localhost:8080/api/v1/users';


  onSubmit() {
    const utilisateur = {
      username: this.username,
      prenom: this.prenom,
      password: this.password,
      telephone: this.telephone,
      email:this.email,

    };

    this.http.post(`${this.apiUsersUrl}/creer`, utilisateur)
      .subscribe(response => {
        this.toastr.success('Compte créé avec succès','Succès');
        this.router.navigate(['/login']);
      }, error => {
        this.toastr.error('Erreur lors de la création du compte','Erreur' );

      });
  }
}

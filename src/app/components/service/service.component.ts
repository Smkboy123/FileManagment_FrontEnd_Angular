
// import { Component, OnInit } from '@angular/core';
// import { ServiceService } from './service.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-service',
//   templateUrl: './service.component.html',
//   styleUrls: ['./service.component.css']
// })
// export class ServiceComponent implements OnInit {
//   private Urlapi = 'http://localhost:8080/service/list';
//   services: Array<any>= [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//       this.http.get<Array<any>>("http://localhost:8080/service/list")
//       .subscribe({
//         next:data => this.services=data,
//         error(err) {
//             console.log(err);
//         },
//       })
//     };
//   }


// services.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Service } from 'src/app/models/service.model';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  //service: Service = new Service();
  services: Service[] = [];
  selectedService: Service | null = null;
  newService: Service = { idService: 0, nomService: '', description: '' };
  addclic : boolean=false
  user: any;
  role: any;

  constructor(
    private toastr: ToastrService,
    private serviceService: ServiceService,
  private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  editService(service: Service): void {
    this.selectedService = { ...service };
  }

  updateService(): void {
    if (this.selectedService) {
      this.serviceService.updateService(this.selectedService.idService,this.selectedService).subscribe(() => {
        this.getServices();
        this.selectedService = null;
        this.toastr.success('Service modifié','Succès' );

      });
    }
  }

  cancelEdit(): void {
    this.selectedService = null;
  }

  deleteService(id: number): void {
    if(confirm("ETES-VOUS SUR DE SUPPRIMER"))
    this.serviceService.deleteService(id).subscribe(() => {
      this.getServices();
    });
  }
  loadServices(): void {
    this.serviceService.getServices().subscribe(data => {
      this.services = data;
    });
  }
  ifaddclic():void{
    this.addclic=true
  }
  addService(): void {
    this.serviceService.addService(this.newService).subscribe(() => {
      this.loadServices();
      this.newService = { idService: 0, nomService: '', description: '' };
      this.addclic=false
      this.toastr.success('Service ajouté','Succès' );

    });
  }

}
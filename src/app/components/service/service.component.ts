
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
import { ServiceService } from './service.service';
import { Service } from 'src/app/models/service/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  //service: Service = new Service();
  services: Service[] = [];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(data => {
      this.services = data;
    });
  }
}


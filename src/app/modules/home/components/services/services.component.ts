import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../../services/json.service';
import { ProvidedService } from '../../interfaces/provided-service';
import { CardModule } from 'primeng/card';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CardModule,NgIf,NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {
    //#region componentsAttr
    private readonly route = inject(ActivatedRoute);
    private readonly jsonService = inject(JsonService);
    serviceId:number = 0;
    selectedService:ProvidedService|null = null ;
    servicesList:ProvidedService[]=[];

    //#endregion

    ngOnInit() {
       this.serviceId =  this.route.snapshot.queryParams['serviceId'];
       if(this.serviceId === undefined || this.serviceId === null)
        {
            this.serviceId = 1;
            console.log(this.serviceId);
        }
        this.loadServicesInfo();
    }

    loadServicesInfo():void{
        this.jsonService.fetchOferedServices().subscribe({
            next:res=>{
                this.selectedService = res.filter(x=>x.id == this.serviceId)[0];
            }
        });
    }
}

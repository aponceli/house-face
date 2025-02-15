import { ProvidedService } from './../../interfaces/provided-service';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { IImage } from '../../../../core/interfaces/iimage';
import { inject } from "@angular/core";
import { JsonService } from '../../services/json.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        ButtonModule,
        CardModule,
        ImageModule,
        CarouselModule,
        NgFor,
        RouterModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone:true
})
export class HomeComponent {
    //#region componentAttributtes
    private jsonService= inject(JsonService);

    providedServiceList:ProvidedService[] = [];
    gallery:IImage[]=[];

    //#endregion

    //#region componentDefault

    ngOnInit(){

        this.gallery=[
            {
                title:'',
                body:'',
                url:'images/MowingService.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/TreeRemovalService.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/MowingService.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/TreeRemovalService.jpg'
            }
        ];
        this.loadOfertedServices();
    }
    //#endregion

    //#region initComponent
    loadOfertedServices():void{
        this.jsonService.fetchOferedServices().subscribe({
            next:res=>{
                this.providedServiceList = res;
            }
        })
    }

    //#endregion


}

import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { IImage } from '../../../../core/interfaces/iimage';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-work',
  imports: [CarouselModule,ImageModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'

})
export class WorkComponent {
    gallery:IImage[]=[];

    ngOnInit(){
        this.gallery=[
            {
                title:'',
                body:'',
                url:'images/gallery/img01.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img02.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img03.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img04.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img05.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img06.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img07.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img08.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img09.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img10.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img11.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img12.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img13.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img14.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img15.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img16.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img17.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img18.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img19.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img20.jpg'
            },
            {
                title:'',
                body:'',
                url:'images/gallery/img21.jpg'
            },
        ];
    }
}

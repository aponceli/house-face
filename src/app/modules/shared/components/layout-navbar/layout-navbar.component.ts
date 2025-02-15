import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-navbar',
  imports: [ButtonModule],
  templateUrl: './layout-navbar.component.html',
  styleUrl: './layout-navbar.component.scss'
})

export class LayoutNavbarComponent {

    @Output() menuEmitter = new EventEmitter<boolean>();



    openMenu():void{
      this.menuEmitter.emit(true);
    }
}

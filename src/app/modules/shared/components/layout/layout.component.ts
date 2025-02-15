import { Component,ViewChild  } from '@angular/core';
import { LayoutNavbarComponent } from "../layout-navbar/layout-navbar.component";
import { RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-layout',
    imports: [
        LayoutNavbarComponent,
        RouterOutlet, DrawerModule,
        ButtonModule,
        Ripple,
        FooterComponent,
        FooterComponent
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    @ViewChild('drawerRef') drawerRef!: Drawer;
    showMenu:boolean = false;

    opeMenu():void{
      this.showMenu = true;
    }
}

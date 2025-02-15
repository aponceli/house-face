import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { ServicesComponent } from './modules/home/components/services/services.component';
import { WorkComponent } from './modules/home/components/work/work.component';
import { AboutUsComponent } from './modules/home/components/about-us/about-us.component';


export const routes: Routes = [
    {
      path:'',
      redirectTo:'app/home',
      pathMatch:'full'
    },
    {
      path:'app',
      component:LayoutComponent,
      children:[
        {
          path:'home',
          component:HomeComponent
        },
        {
          path:'services',
          component:ServicesComponent,
        },
        {
        path:'our-work',
        component:WorkComponent,
        },
        {
        path:'about-us',
        component:AboutUsComponent,
        }
      ]
    }
];

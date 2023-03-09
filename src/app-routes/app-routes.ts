import { Routes } from "@angular/router";
import { LayoutComponent } from "src/app/layout/layout.component";

export const appRoutes: Routes = [
    
    {
        path: '', 
        pathMatch : 'full',  
        redirectTo: 'app'
    },

    {
        path:'app',
        component:LayoutComponent,
        children:[
            { path:'home' , loadChildren : () => import('../app/modules/home/home.module').then( m => m.HomeModule ) }
        ]
    },
   
    {
        path:'item',
        component:LayoutComponent
    }
];
  
import { Routes } from "@angular/router";
import { LayoutComponent } from "src/app/layout/layout.component";

export const appRoutes: Routes = [
    
    {
        path: '', 
        pathMatch : 'full',  
        redirectTo: 'app/doctors-list'
    },

    {
        path:'app',
        component:LayoutComponent,
        children:[
            { path:'home'           , loadChildren : () => import('../app/modules/home/home.module').then( m => m.HomeModule ) },
            { path:'doctors-list'   , loadChildren : () => import('../app/modules/doctors-list/doctors-list.module').then( m => m.DoctorsListModule ) },
            { path:'follow-up'      , loadChildren : () => import('../app/modules/follow-up/follow-up.module').then( m => m.FollowUpModule ) },
            { path:'user-profile'   , loadChildren : () => import('../app/modules/user-profile/user-profile.module').then( m => m.UserProfileModule ) },
        ]
    },
    
    {   
        path:'doctor-profile' , 
        loadChildren : () => import('../app/modules/doctor-profile/doctor-profile.module').then( m => m.DoctorProfileModule ) 
    }
];
  
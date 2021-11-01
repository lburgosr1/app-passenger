import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [

    { 
        path: 'welcome', 
        loadChildren: () => import('./home/welcome.module').then(m=>
            m.WelcomeModule)
    },
    { 
        path: 'passengers', 
        loadChildren: () => import('./passenger/passenger.module').then(m=>
            m.PassengerModule)
    },
    { 
        path: 'passenger/:id', 
        loadChildren: () => import('./add_passenger/add-passenger.module').then(m=>
            m.AddPassengerModule) 
    }, 
    { 
        path: 'add-passenger', 
        loadChildren: () => import('./add_passenger/add-passenger.module').then(m=>
            m.AddPassengerModule) 
    },
    { 
        path: 'airlines', 
        loadChildren: () => import('./airlines/airlines.module').then(m=>
            m.AirlinesModule) 
    },
    { 
        path: 'add-airline', 
        loadChildren: () => import('./add_airline/add-airline.module').then(m=>
            m.AddAirlineModule) 
    },
    { 
        path: 'airline/:id', 
        loadChildren: () => import('./airline_detail/airline-detail.module').then(m=>
            m.AirlineDetailModule) 
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
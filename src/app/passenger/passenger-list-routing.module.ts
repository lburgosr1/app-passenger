import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PassengerComponent } from "./passenger-list.component";

const routes: Routes = [
    {
        path: '',
        component: PassengerComponent
    },
]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class PassengerRoutingModule{}
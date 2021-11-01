import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddAirlineComponent } from "./add-airline.component";

const routes: Routes = [
    {
        path: '',
        component: AddAirlineComponent
    },
]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class AddAirlineRoutingModule{}
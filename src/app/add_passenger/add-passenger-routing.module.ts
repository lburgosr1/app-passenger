import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddPassengerComponent } from "./add-passenger.component";

const routes: Routes = [
    {
        path: '',
        component: AddPassengerComponent
    },
]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class AddPassengerRoutingModule{}
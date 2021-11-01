import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AirlineDetailGuard } from "./airline-detail.guard";
import { AirlineDetailComponent } from "./airline-detail.component";

const routes: Routes = [
    { 
        path: '', 
        canActivate: [AirlineDetailGuard], 
        component: AirlineDetailComponent 
    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AirlineDetailRoutingModule{}
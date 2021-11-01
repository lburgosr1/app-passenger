import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AirlinesListComponent } from "./airlines-list.component";

const routes: Routes = [
    {
        path: '',
        component: AirlinesListComponent
    },
]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class AirlinesRoutingModule{}
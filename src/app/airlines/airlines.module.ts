import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

import { AirlinesRoutingModule } from "./airlines-list-routing.module";
import { AirlinesListComponent } from "./airlines-list.component";
import { AppLoadingModule } from "../commo/components/app-loading/app-loading.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        AirlinesListComponent
    ],
    imports: [
        CommonModule,
        AirlinesRoutingModule,
        NgbModule,
        AppLoadingModule, 
        FormsModule
    ]
})
export class AirlinesModule {}

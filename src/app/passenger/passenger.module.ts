import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

import { PassengerRoutingModule } from "./passenger-list-routing.module";
import { PassengerComponent } from "./passenger-list.component";
import { AppLoadingModule } from "../commo/components/app-loading/app-loading.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        PassengerComponent,
    ],
    imports: [
        CommonModule,
        PassengerRoutingModule,
        NgbModule,
        AppLoadingModule, 
        FormsModule
    ]
})
export class PassengerModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AirlineDetailRoutingModule } from "./airline-detail-routing.module";
import { AirlineDetailComponent } from "./airline-detail.component";

@NgModule({
    declarations:[
        AirlineDetailComponent
    ],
    imports:[
        CommonModule,
        AirlineDetailRoutingModule,
        SharedModule

    ]
})
export class AirlineDetailModule{}
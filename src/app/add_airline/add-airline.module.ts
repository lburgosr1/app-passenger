import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddAirlineRoutingModule } from "./add-airline-routing.module";
import { AddAirlineComponent } from "./add-airline.component";


@NgModule({
    declarations: [
        AddAirlineComponent
    ],
    imports: [
        CommonModule,
        AddAirlineRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AddAirlineModule{}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddPassengerRoutingModule } from "./add-passenger-routing.module";
import { AddPassengerComponent } from "./add-passenger.component";


@NgModule({
    declarations: [
        AddPassengerComponent
    ],
    imports: [
        CommonModule,
        AddPassengerRoutingModule,
        FormsModule
    ]
})
export class AddPassengerModule{}
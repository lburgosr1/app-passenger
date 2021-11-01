import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppModalDeleteConfirmationComponent } from "./app-modal-delete-confirmation.component";
import { AppViewComponent } from "./app-modal-view.component";


@NgModule({
    declarations: [
        AppModalDeleteConfirmationComponent,
        AppViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        AppModalDeleteConfirmationComponent,
        AppViewComponent
    ],
    entryComponents: [
        AppModalDeleteConfirmationComponent,
        AppViewComponent
    ]
})
export class AppModalModule{}
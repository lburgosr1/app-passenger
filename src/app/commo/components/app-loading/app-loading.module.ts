import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppLoadingComponent } from "./app-loading.component";


@NgModule({

    declarations:[
        AppLoadingComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AppLoadingComponent
    ]
})
export class AppLoadingModule{}
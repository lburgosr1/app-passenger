import { Injectable } from "@angular/core";
import { UsableService } from "../services/usable-service";


@Injectable()
export abstract class BaseComponent<T>{

    constructor(public usableService: UsableService){}

    activeSuccessMessage(message: string) : void{

        this.usableService.toaster.success(message);
    }

}


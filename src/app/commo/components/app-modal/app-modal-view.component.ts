import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { IAirline } from "../../models/pasennger";
import { Modal } from "./modal";


@Component({
    templateUrl: './app-modal-view.component.html'
})
export class AppViewComponent implements OnInit{

    airline = {} as IAirline;


    public whenClose: Subject<boolean> = new Subject<boolean>();

    constructor(public activeModal : NgbActiveModal) {
    }

    ngOnInit(){
        
    }

    cancel(): void {
        this.whenClose.next(false);
        this.activeModal.close();
    }

    set(airline: IAirline): void {
        this.airline = airline;
    }  

}
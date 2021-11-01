import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { Modal } from "./modal";


@Component({
    templateUrl: './app-modal-delete-confirmation.html'
})
export class AppModalDeleteConfirmationComponent{

    modal = new Modal();

    public whenClose: Subject<boolean> = new Subject<boolean>();

    constructor(public activeModal : NgbActiveModal) {
    }

    accept(): void {
        this.whenClose.next(true);
        this.activeModal.close();
    }

    cancel(): void {
        this.whenClose.next(false);
        this.activeModal.close();
    }

    set(modal: Modal): void {
        this.modal = modal;
    }

}
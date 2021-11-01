import { Component, NgModule, OnDestroy, OnInit, Type } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiDataService } from "../commo/services/api-data.service";
import { IAirline, IDataPassenger } from "../commo/models/pasennger";
import { IResponseDataPassenger } from "../commo/models/pasennger";
import { Modal } from "../commo/components/app-modal/modal";
import { AppModalDeleteConfirmationComponent } from "../commo/components/app-modal/app-modal-delete-confirmation.component";
import { BaseComponent } from "../commo/components/base.component";
import { UsableService } from "../commo/services/usable-service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    templateUrl: "./passenger-list.component.html",
    styleUrls: ["./passenger-list.component.css"]
})
export class PassengerComponent extends BaseComponent<IDataPassenger> implements OnInit {

    pageTitle = "Passenger List";
    passengers: Array<IDataPassenger> = [];
    sub!: Subscription;
    errorMessage: string = '';
    isLoading: boolean = true;
    page: number = 0;
    pageSize: number = 10;
    totalPage: number = 0;
    previousPage: number = 1;


    constructor(private apiDataService: ApiDataService,
        private modal: NgbModal,
        usableService: UsableService) {

        super(usableService);
    }

    ngOnInit() {
        this.isLoading = true;
        this.onPagination();
    }

    onPagination() {

        this.sub = this.apiDataService.getAllPassengerPagination(this.page, this.pageSize).subscribe({
            next: (response: IResponseDataPassenger) => {
                this.passengers = response.data;
                this.isLoading = false;
                this.totalPage = response.totalPages;
            },
            error: err => this.errorMessage = err
        });
    }

    loadPage(page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.onPagination();
        }
    }

    delete(id: string, passenger: IDataPassenger) {

        const index = this.passengers.findIndex(item => item._id == passenger._id);
        const modalModel = new Modal();
        modalModel.buttonTextCancel = 'Cancelar';
        modalModel.buttonTextConfirmation = 'Aceptar';
        modalModel.title = passenger.name;
        modalModel.body = '¿Esta segur@ de que desea eliminar el pasajero: "' + passenger.name + '"?';

        const modalRef = this.modal.open(AppModalDeleteConfirmationComponent);
        modalRef.componentInstance.set(modalModel);



        modalRef.componentInstance.whenClose.subscribe((result: boolean) => {
            if (result) {

                this.apiDataService.deletePassenger(id)
                    .subscribe((res) => {

                        this.passengers.splice(index, 1);
                        this.usableService.toaster.success('El pasajero ' + passenger.name + " fue eliminado con exito");

                    }, error => {

                    });
            }
        });


    }

}
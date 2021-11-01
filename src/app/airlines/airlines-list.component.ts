import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IAirline, IDataPassenger, IResponseDataPassenger } from "../commo/models/pasennger";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ApiDataService } from "../commo/services/api-data.service";
import { UsableService } from "../commo/services/usable-service";
import { Modal } from "../commo/components/app-modal/modal";
import { ActivatedRoute } from "@angular/router";
import { AppViewComponent } from "../commo/components/app-modal/app-modal-view.component";

@Component({
    templateUrl: './airlines-list.component.html',
    styleUrls: ['./airlines-list.component.css'],
})
export class AirlinesListComponent implements OnInit, OnDestroy {

    pageTitle = 'Airlines List';
    showImage = false;
    airlines: Array<IAirline> = [];
    errorMessage: string = '';
    sub!: Subscription;
    isLoading: boolean = true;
    page: number = 0;
    pageSize: number = 10;
    totalPage: number = 0;
    previousPage: number = 0;
    id: number = 0;

    constructor(private modal: NgbModal, 
                private apiDataService: ApiDataService,
                private route: ActivatedRoute) { }

    ngOnInit() {

        this.isLoading = true;
        this.getAllAirlines();
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        if(this.id){
            this.getIdAirline(this.id);
        } 

    }
    getAllAirlines(){
        this.sub = this.apiDataService.getAllAirline().subscribe({
            next: (response: IAirline[]) => {
                this.airlines = response;
                this.isLoading = false;
            },
            error: err => this.errorMessage = err
        }); 
    }
    getIdAirline(id: number): void {
        this.apiDataService.getIdAirline(id).subscribe({
          next: (response: IAirline) => {this.airlines[0].id = response.id}, 
          error: err => this.errorMessage = err
        });
    }

    view(airline: IAirline) {

        const modalRef = this.modal.open(AppViewComponent);
        modalRef.componentInstance.set(airline);

    }
    ngOnDestroy() {
        this.sub.unsubscribe;
    }

    toggleImage(): void {

        this.showImage = !this.showImage;
    }
    onRatingClicked(message: string): void {

        this.pageTitle = 'Airlines List: ' + message;
    }
}

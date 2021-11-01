import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "../commo/components/base.component";
import { ApiDataService } from "../commo/services/api-data.service";
import { UsableService } from "../commo/services/usable-service";
import { IAirline, IDataPassenger } from "../commo/models/pasennger";
import { NgForm } from "@angular/forms";


@Component({
    templateUrl: "./add-passenger.component.html",
    styleUrls: ["./add-passenger.component.css"]
})
export class AddPassengerComponent extends BaseComponent<IDataPassenger> implements OnInit {

    pageTitle = "Add Passenger";
    errorMessage = "";
    passenger = {} as IDataPassenger;
    selectedAirlineId: number = 0;
    passengerForm: any;
    airlines: Array<IAirline> = [];
    id: string | null;
    isEdit: boolean = false;
    nameButton = "Add";
    btnColor = "btn btn-primary";
    btnIcon = "fa fa-plus-circle";


    constructor(private router: Router,
        private apiDataService: ApiDataService,
        private route: ActivatedRoute,
        usableService: UsableService) {

        super(usableService);
        this.id = this.route.snapshot.paramMap.get('id');

    }

    ngOnInit(): void {

        this.getAllAirlines();
        this.isEditPassenger();
    }

    addPassenger(formController: NgForm) {
        
        let passenger = {
            name : this.passenger.name,
            trips : this.passenger.trips,
            airline : this.selectedAirlineId
        } as IDataPassenger;

        this.usableService.validFormFild(formController);

        if(formController.valid){

            this.apiDataService.addPassenger(passenger).subscribe((result: boolean) => {
                if (result) {
                    this.usableService.toaster.success('Pasajer@ ' + this.passenger.name + " fue registrad@ con exito");
                    this.onBack();
                }
            }); 

        }
    }

    editPassenger(id: string, formController: NgForm) {

        let passenger = {
            name : this.passenger.name,
            trips : this.passenger.trips,
            airline : this.selectedAirlineId
        } as IDataPassenger;

        this.usableService.validFormFild(formController);

        if(formController.valid){

            this.apiDataService.updatePassenger(id, passenger).subscribe({
                next: () => {
                    this.usableService.toaster.success('Pasajer@ ' + passenger.name + " fue actualizad@ con exito");
                    this.onBack();
                },
                error: err => this.errorMessage = err
            });
        }
    }

    addEditPassenger(f: NgForm) {

        if (!this.id) {
            this.addPassenger(f);
        } else {
            this.editPassenger(this.id, f);
        }

    }
    
    isEditPassenger() {


        if (this.id) {
            this.isEdit = true;
            this.nameButton = "Edit";
            this.pageTitle = "Edit Passenger";
            this.btnColor = "btn btn-warning";
            this.btnIcon = "fa fa-edit";
            this.apiDataService.getIdPassenge(this.id).subscribe({
                next: (response: IDataPassenger) => {
                    this.passenger = response;
                    this.selectedAirlineId = this.passenger.airline[0].id as number;
                },
                error: err => this.errorMessage = err
            });
        } 
    }
    getAllAirlines() {
        this.apiDataService.getAllAirline().subscribe({
            next: (response: IAirline[]) => {
                this.airlines = response.filter(x => x.id);
            },
            error: err => this.errorMessage = err
        });
    }

    onRefresh() {
        if (!this.passengerForm)
            this.passengerForm.reset();
    }

    onBack() {
        this.router.navigate(['/passengers']);
    }
}
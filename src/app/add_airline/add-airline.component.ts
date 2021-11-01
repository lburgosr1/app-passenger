import { Component, OnInit } from "@angular/core";
import { FormBuilder, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Airline } from "../commo/models/airline";
import { BaseComponent } from "../commo/components/base.component";
import { ApiDataService } from "../commo/services/api-data.service";
import { UsableService } from "../commo/services/usable-service";
import { IAirline } from "../commo/models/pasennger";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { isEmpty } from "rxjs/operators";


@Component({
    templateUrl: "./add-airline.component.html",
    styleUrls: ["./add-airline.component.css"]
})
export class AddAirlineComponent extends BaseComponent<IAirline> implements OnInit {

    pageTitle = "Add Airline";
    errorMessage = "";
    airline = {} as Airline;
    addAirlineForm: any;

    constructor(private router: Router,
        private apiDataService: ApiDataService,
        usableService: UsableService,
        private fb: FormBuilder) {

        super(usableService);
    }

    ngOnInit(): void {
        this.createForm();
    }


    createForm(){
        this.addAirlineForm = this.fb.group({
            "name": new FormControl("", [Validators.required, Validators.pattern('^[a-zA-ZñÑá-úÁ-Ú _]*')]),
            "country": new FormControl("", [Validators.required, Validators.pattern('^[a-zA-ZñÑá-úÁ-Ú _]*')]), 
            "website": new FormControl("", [Validators.required]), 
            "established": new FormControl("", [Validators.required, Validators.pattern('[0-9]*')]),
            "slogan": new FormControl(null)
        }) 
    }

    get name(){
        return this.addAirlineForm.get("name");
    }
    get country(){
        return this.addAirlineForm.get("country");
    }
    get website(){
        return this.addAirlineForm.get("website");
    }
    get established(){
        return this.addAirlineForm.get("established");
    }

    onSubmit() {
        if (this.addAirlineForm.valid) {
            
            this.apiDataService.addAirline(this.addAirlineForm.value).subscribe((result: boolean) => {
                if(result){
                    this.usableService.toaster.success('La aerolinea ' + this.addAirlineForm.value.name + " fue registrada con exito");
                    this.onRefresh();
                }
            });

          }else {
            this.usableService.toaster.error("Uno o mas campos estan vacio");
        }
    }

    onRefresh() {
        if (this.addAirlineForm != null)
            this.addAirlineForm.reset();
    }
    onBack() {
        this.router.navigate(['/airlines']);
    }
}
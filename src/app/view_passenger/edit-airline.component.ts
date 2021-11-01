import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiDataService } from "../commo/services/api-data.service";
import { IDataAirline } from "../commo/models/pasennger";


@Component({
    templateUrl: "./edit-airline.component.html",
    styleUrls: ["./edit-airline.component.css"]
})
export class EditAirlineComponent implements OnInit{
    
    pageTitle = "Edit Airline";
    errorMessage = "";
    passenger = {} as IDataAirline;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private airlineService: ApiDataService){}


    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if(id){
          this.getAirline(id);
        }
    }
    getAirline(id: number): void {
        this.airlineService.getPassenge(id).subscribe({
          next: (response: IDataAirline) => {
              this.passenger = response
            }, 
          error: err => this.errorMessage = err
        });
    }

    onSubmit(airlineForm: NgForm){
        this.airlineService.updateAirline(airlineForm.value).subscribe(() => {
            
        });
    }

    onBack(){
        this.router.navigate(['/products']);
    }
}
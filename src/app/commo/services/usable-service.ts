import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class UsableService {
    constructor(

        public toaster: ToastrService,
        
    ) {}

    validFormFild(formController: NgForm){

        Object.keys(formController.form.controls).forEach(fild=>{

            const control = formController.form.get(fild);

            control?.markAsTouched({onlySelf: true});
        })
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airline } from '../commo/models/airline';
import { ApiDataService } from '../commo/services/api-data.service';
import { IAirline, IDataPassenger } from '../commo/models/pasennger';
//import { ProductService } from '../products/product.service';
//import { IProduct } from '../products/product';


@Component({
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css']
})
export class AirlineDetailComponent implements OnInit {

  pageTitle = 'Airline Detail';
  //product: IProduct | undefined;
  airlines: Array<Airline> = [];
  errorMessage = '';

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private airlineService: ApiDataService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getIdAirlines(id);
    }
  }
  getIdAirlines(id: number): void {
    this.airlineService.getIdAirline(id).subscribe({
      next: (airline: IAirline) => {this.airlines.push(airline)}, 
      error: err => this.errorMessage = err
    });
  }
  onBack(){
    this.router.navigate(['/airlines']);
  }

}

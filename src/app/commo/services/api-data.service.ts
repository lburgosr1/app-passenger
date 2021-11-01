import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IAirline, IDataPassenger, IResponseDataPassenger } from "../models/pasennger";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AIRLINEURL } from "../constants/airline-url.constant";
import { Airline } from "../models/airline";

@Injectable({
    providedIn: 'root'
})
export class ApiDataService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getAllPassengerPagination(page: number, size: number): Observable<IResponseDataPassenger> {
        const url = this.format(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.getAllPassengerPagination}`, page, size)
        return this.http.get(url) as Observable<IResponseDataPassenger>;
    }

    getIdPassenge(id: string | null): Observable<IDataPassenger> {
        return this.http.get(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.getIdPassenger}/${id}`) as Observable<IDataPassenger>;
    }

    addPassenger(passenger: IDataPassenger): Observable<IAirline> | any {

        return this.http.post<IAirline>(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.addPassenger}`, passenger);
    }
    updatePassenger(id: string | null, passenger: IDataPassenger) {
        return this.http.put(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.updatePassenger}/${id}`, passenger);
    }

    deletePassenger(id: string) {
        return this.http.delete(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.deletePassenger}/${id}`);
    }

    getAllAirline(): Observable<IAirline[]> {
        const url = this.format(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.getAllAirlines}`)
        return this.http.get(url) as Observable<IAirline[]>;
    }
    getIdAirline(id: string | number) {
        return this.http.get(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.getIdAirline}/${id}`) as Observable<IAirline>;
    }
    addAirline(airline: IAirline): Observable<IAirline> | any {

        return this.http.post<IAirline>(`${this.baseUrl}/${AIRLINEURL.version.currentVersion}/${AIRLINEURL.action.addAirline}`, airline) as Observable<IAirline>;
    }

    format(sentence: string, ...args: any[]): string {
        return sentence.replace(/\{\{|\}\}|\{(\d+)\}/g, (m, n) => {
            if (m === '{{') {
                return '{';
            }
            if (m === '}}') {
                return '}';
            }
            return args[n];
        });
    }
    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

export interface IResponseDataPassenger{
    totalPassengers: number;
    totalPages: number;
    data: Array<IDataPassenger>;
}
export interface IDataPassenger{
    _id: string;
    name: string;
    trips: number;
    airline: any;
}
export interface IAirline{
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    website: string;
    established: string;
}

export class Airline{
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    website: string;
    established: string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.country = "",
        this.logo = "";
        this.slogan = "";
        this.website = "";
        this.established = "";
    }
}
import { RegularTicket, VIPTicket } from "./tickets";


export class Flight {
    constructor(name, airline, flightNumber, maxPassengers, rgularPrice, vipPrice) {
        this.name = name;
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.maxPassengers = maxPassengers;
        this.rgularPrice = rgularPrice;
        this.vipPrice = vipPrice;
        this.ticketsList = [];
    }
}
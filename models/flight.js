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
        this.initTickets();
    }

    initTickets() {
        // vip can be only 10 %
        const vipCount = Math.ceil(this.maxPassengers * 0.1);
        // the rest of passengers
        const regularCount = this.maxPassengers - vipCount;
        
        for(let i = 0; i < vipCount; i++){
            this.ticketsList.push(new VIPTicket)
        }
            
        for(let i = 0; i < regularCount; i++){
            this.ticketsList.push(new RegularTicket)
        }
    }
}
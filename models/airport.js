import { Flight } from "./flight";

export class Airport {
    constructor() {
        this.flights = [];
        this.initFlight();
    }
    
    initFlight() {
        
        const flight1 = new Flight("usa", "elal", "888", 100, 200, 500);
        const flight2 = new Flight("france", "arkia", "001", 120, 250, 700);
        const flight3 = new Flight("London", "blo", "165", 150, 300, 1000);
        this.flights.push(flight1, flight2, flight3)
    }
}
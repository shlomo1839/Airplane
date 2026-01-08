class Flight {
    constructor(flightName, airline, flightNumber, maxPassengers, rgularTicketPrice, vipTicketPrice) {
        this.flightName = flightName;
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.maxPassengers = maxPassengers;
        this.rgularTicketPrice = rgularTicketPrice;
        this.vipTicketPrice = vipTicketPrice;
        this.ticketsList = []
    }
}



export default Flight;
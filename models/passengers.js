import { Ticket } from "./tickets";

class Passenger {
    constructor(name, id, amount) {
        this.name = name;
        this.id = id;
        this.amount = amount;
    }

    buyTicket(flight, ticketType) {
        const ticketToBuy = flight.getAvailableTicket(ticketType);
        if (!ticketToBuy) {
            return false;
        }
        const priceToPay = this.calculatePrice(Ticket.price, ticketType);
        if (this.amount < priceToPay) {
            return false;
        }
        this.amount -= priceToPay;
        Ticket.ownerName = this.name;
        return true;
    }

}

export class StudentPassenger extends Passenger {
    constructor(name, id, amount, School){
        super(name, id, amount)
        this.School = School;
    }

    calculateDiscount(originalPrice, ticketType){
        if (ticketType === 'regular') {
            return originalPrice * 0.9
        }
        return originalPrice
    }
}

export class RgularPassenger extends Passenger {
    constructor(name, id, amount, workplace, knowsEmployee) {
        super(name, id, amount)
        this.workplace = workplace;
        this.knowsEmployee = knowsEmployee
    }

    calculateDiscount(originalPrice, ticketType) {
        if (this.knowsEmployee) {
            if (ticketType === 'regular') {
                return originalPrice * 0.8
            }
            if (ticketType === 'VIP') {
                return originalPrice * 0.85
            }
            console.log("no diccount")
            return originalPrice;
        }

    }
}
class Ticket {
    constructor(price) {
        this.price = price;
        this.ownerName = ownerName;
    }
};


export class RegularTicket extends Ticket {
    constructor() {
        super(price, ownerName);
        this.ticketNumber = Math.floor(Math.random() * 1000);
        this.type = 'regular;'
    }
};


export class VIPTicket extends Ticket {
    constructor() {
        super(price, ownerName);
        this.ticketNumber = 1;
        this.benefits = ['Free alcohol', 'Free food', 'Hot Towels'];
        this.type = 'VIP';
    }
};
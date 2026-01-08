class Passenger {
    constructor(name, idNumber, amount) {
        this.name = name;
        this.idNumber = idNumber;
        this.amount = amount;
    }
}

class StudentPassenger extends Passenger {
    constructor(School){
        super(name, idNumber, amount)
        this.school = school;
    }

    discount(){

    }
}

class RgularPassenger extends Passenger {
    constructor(workplace, employee) {
        super(name, idNumber, amount)
    }
}
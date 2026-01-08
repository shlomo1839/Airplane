import {Airport} from './models/airport.js';
import {StudentPassenger, RgularPassenger} from './passengers.js'

const ramon = new Airport();

const student = new StudentPassenger("ben", "123", 2000, "open uni")
const regular = new RgularPassenger("shlomo", "1234", 5000, "nvidia", true)


const specificFlight = ramon.flights[0];
regular.buyTicket(specificFlight, 'regular');
student.buyTicket(specificFlight, 'vip');
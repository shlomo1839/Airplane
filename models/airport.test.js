import {describe, test} from 'node:test';
import {assert} from 'node:assert';
import {Flight} from './flight.js';
import {RgularPassenger} from './passengers.js'

describe('Ticket Purchase Flow', () => {
    test('return false when passenger does not have enough money for buy', () => {
        const flight = new Flight("test flight", "test air", "t1", 10, 100, 200);
        const poorPassenger = new RgularPassenger("someone", "111", 50, "None", false);
        const result = poorPassenger.buyTicket(flight, "regular");
        assert.strictEqual(result, false)
    })

    test('return true and update amount when passenger has enough money', () => {
        const ticketPrice = 100;
        const flight = new Flight("test flight", "test air", "t1", 10, ticketPrice, 200);
        const richPassenger = new RgularPassenger("someone reach", "112", 500, "none", false);
        const result = richPassenger.buyTicket(flight, 'regular')
        assert.strictEqual(result, true)
        assert.strictEqual(richPassenger.amount, 400);

        const soldTicket = flight.tickets.find(t => t.ownerName === "someone reach");
        assert.ok(soldTicket);
    })
});


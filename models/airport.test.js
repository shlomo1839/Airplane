import test, { describe, it } from 'node:test';
import assert from 'node:assert';
import { Flight } from './flight.js';
import { RgularPassenger } from './passengers.js'

describe('Ticket Purchase Flow', () => {
    test('return false when passenger does not have enough money for buy', () => {
        const flight = new Flight("test flight", "test air", "t1", 10, 100, 200);
        const poorPassenger = new RgularPassenger("someone", "111", 50, "None", false);
        const result = poorPassenger.buyTicket(flight, "regular");
        assert.strictEqual(result, false)
    })

    test('return true and update amount when passenger has enough money', () => {
        
        
        
        
    });

})

























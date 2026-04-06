"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(strategy) {
        this.strategy = strategy;
    }
    pay(amount) {
        this.strategy.pay(amount);
    }
}
exports.Payment = Payment;

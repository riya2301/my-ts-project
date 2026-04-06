"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = void 0;
const cardStrategy_1 = require("./cardStrategy");
const payment_1 = require("./payment");
class CardPayment extends payment_1.Payment {
    constructor() {
        super(new cardStrategy_1.CardStrategy());
    }
}
exports.CardPayment = CardPayment;

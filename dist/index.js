"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const upiPayment_1 = require("./strategy/upiPayment");
const cardPayment_1 = require("./strategy/cardPayment");
function greet(name) {
    const payment = new upiPayment_1.UpiPayment();
    payment.pay(100);
    const payment2 = new cardPayment_1.CardPayment();
    payment2.pay(100);
}
console.log(greet("hello"));

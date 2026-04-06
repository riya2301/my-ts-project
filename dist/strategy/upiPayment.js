"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpiPayment = void 0;
const payment_1 = require("./payment");
const upiStrategy_1 = require("./upiStrategy");
class UpiPayment extends payment_1.Payment {
    constructor() {
        super(new upiStrategy_1.UpiStrategy());
    }
}
exports.UpiPayment = UpiPayment;

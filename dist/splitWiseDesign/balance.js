"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
class Balance {
    constructor(amountOwed, amountGet) {
        this.amountOwed = amountOwed;
        this.amountGet = amountGet;
    }
    getAmountOwed() {
        return this.amountOwed;
    }
    getAmountGet() {
        return this.amountGet;
    }
    setAmountOwed(amountOwed) {
        this.amountOwed = amountOwed;
    }
    setAmountGet(amountGet) {
        this.amountGet = amountGet;
    }
    increaseAmountOwed(delta) {
        this.amountOwed += delta;
    }
    increaseAmountGet(delta) {
        this.amountGet += delta;
    }
}
exports.Balance = Balance;

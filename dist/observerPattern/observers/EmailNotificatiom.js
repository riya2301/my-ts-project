"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email, IStockOservable) {
        this.email = email;
        this.IStockOservable = IStockOservable;
        this.email = email;
    }
    sendNotification(message) {
        console.log(`Sending notification to ${this.email}: ${message}`);
    }
    update(stockPrice) {
        this.sendNotification(`Stock price is ${stockPrice}`);
    }
}
exports.EmailNotification = EmailNotification;

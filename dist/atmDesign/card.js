"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const useBankAccount_1 = require("./useBankAccount");
class Card {
    constructor(cardNumber, cardHolderName, balance) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.pin = "111";
        this.account = new useBankAccount_1.UseBankAccount(balance);
    }
    getCardNumber() {
        return this.cardNumber;
    }
    getCardHolderName() {
        return this.cardHolderName;
    }
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }
    setCardHolderName(cardHolderName) {
        this.cardHolderName = cardHolderName;
    }
    isCorrectPin(pin) {
        return pin === this.pin;
    }
}
exports.Card = Card;

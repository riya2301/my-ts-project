"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATMState = void 0;
const idleState_1 = require("./idleState");
class ATMState {
    insertCard(atm, card) {
        console.log("Card inserted1");
    }
    ;
    authenticatePin(atm, pin, card) {
        console.log("Pin authenticated1");
    }
    ;
    withdraw(atm, amount, card, user) {
        console.log("Withdrawing amount1");
    }
    ;
    deposit(atm, amount, card, user) {
        console.log("Depositing amount1");
    }
    ;
    selectOperation(atm, transactionType) {
        console.log("Operation selected1");
    }
    ;
    ejectCard(atm) {
        atm.setState(new idleState_1.IdleState());
    }
    ;
    insertPin() {
        console.log("Pin inserted1");
    }
    ;
    enterPin() {
        console.log("Pin entered1");
    }
    ;
    enterAmount(atm, amount) {
        console.log("Amount entered1");
    }
    ;
    dispenseCash() {
        console.log("Cash dispensed1");
    }
    ;
}
exports.ATMState = ATMState;

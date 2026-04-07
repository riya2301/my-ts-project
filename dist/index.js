"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upiPayment_1 = require("./strategy/upiPayment");
const cardPayment_1 = require("./strategy/cardPayment");
const store_1 = __importDefault(require("./observerPattern/store"));
const atmRoom_1 = require("./atmDesign/atmRoom");
const transactionTypes_1 = require("./atmDesign/transactionTypes");
function strategyPattern(name) {
    const payment = new upiPayment_1.UpiPayment();
    payment.pay(100);
    const payment2 = new cardPayment_1.CardPayment();
    payment2.pay(100);
}
function observerPattern(name) {
    const iphoneObservable = store_1.default.init();
    iphoneObservable.setStockPrice(100);
}
function atmDesign() {
    const atmRoom = new atmRoom_1.ATMRoom();
    atmRoom.atm.getState().insertCard(atmRoom.atm, atmRoom.user.getCard());
    atmRoom.atm.getState().authenticatePin(atmRoom.atm, "111", atmRoom.user.getCard());
    atmRoom.atm.getState().selectOperation(atmRoom.atm, transactionTypes_1.TransactionType.WITHDRAW);
    atmRoom.atm.getState().withdraw(atmRoom.atm, 1000, atmRoom.user.getCard(), atmRoom.user);
}
strategyPattern("hello");
observerPattern("hello");
atmDesign();

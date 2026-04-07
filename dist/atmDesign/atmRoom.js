"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATMRoom = void 0;
const atm_1 = require("./atm");
const card_1 = require("./card");
const user_1 = require("./user");
class ATMRoom {
    constructor() {
        this.atm = new atm_1.ATM();
        this.user = new user_1.User("John Doe", "1234567890", 30000, new card_1.Card("1234567890", "John Doe", 30000));
        this.initialize();
    }
    initialize() {
        console.log(`Welcome ${this.user.getName()} to the ATM Room`);
    }
}
exports.ATMRoom = ATMRoom;

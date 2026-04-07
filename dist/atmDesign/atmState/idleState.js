"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdleState = void 0;
const hasCardState_1 = require("./hasCardState");
const atmstate_1 = require("./atmstate");
class IdleState extends atmstate_1.ATMState {
    insertCard(atm, card) {
        console.log("Card inserted");
        atm.setState(new hasCardState_1.HasCardState());
    }
}
exports.IdleState = IdleState;

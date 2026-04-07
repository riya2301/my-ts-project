"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasCardState = void 0;
const atmstate_1 = require("./atmstate");
const idleState_1 = require("./idleState");
const selectOperationState_1 = require("./selectOperationState");
class HasCardState extends atmstate_1.ATMState {
    authenticatePin(atm, pin, card) {
        if (card.isCorrectPin(pin)) {
            console.log("Pin authenticated");
            atm.setState(new selectOperationState_1.SelectOperationState());
        }
        else {
            console.log("Pin incorrect");
            this.ejectCard(atm);
        }
    }
    ejectCard(atm) {
        console.log("Card ejected");
        atm.setState(new idleState_1.IdleState());
    }
}
exports.HasCardState = HasCardState;

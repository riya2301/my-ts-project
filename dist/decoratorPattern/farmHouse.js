"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmHouse = void 0;
const basePizza_1 = require("./basePizza");
class FarmHouse extends basePizza_1.BasePizza {
    getCost() {
        return 150;
    }
}
exports.FarmHouse = FarmHouse;

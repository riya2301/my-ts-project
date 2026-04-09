"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TomatoToping = exports.CheeseToping = exports.TopingDecorator = void 0;
const basePizza_1 = require("./basePizza");
class TopingDecorator extends basePizza_1.BasePizza {
}
exports.TopingDecorator = TopingDecorator;
class CheeseToping extends TopingDecorator {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
    getCost() {
        return this.pizza.getCost() + 20;
    }
}
exports.CheeseToping = CheeseToping;
class TomatoToping extends TopingDecorator {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
    getCost() {
        return this.pizza.getCost() + 15;
    }
}
exports.TomatoToping = TomatoToping;

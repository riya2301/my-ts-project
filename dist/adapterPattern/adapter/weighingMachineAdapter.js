"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeighingMachineAdapter = void 0;
class WeighingMachineAdapter {
    constructor(weigingMachine) {
        this.weigingMachine = weigingMachine;
    }
    getWeightInKg() {
        return this.weigingMachine.getWeight() / 1000;
    }
}
exports.WeighingMachineAdapter = WeighingMachineAdapter;

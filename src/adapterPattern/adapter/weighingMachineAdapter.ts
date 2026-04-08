import { IWeigingMachine } from "../adaptee/weigingMachine";

export interface IWeighingMachineAdapter {
    getWeightInKg(): number;
}
export class WeighingMachineAdapter implements IWeighingMachineAdapter {
    private weigingMachine: IWeigingMachine;
    constructor(weigingMachine: IWeigingMachine) {
        this.weigingMachine = weigingMachine;
    }
    getWeightInKg(): number {
        return this.weigingMachine.getWeight() / 1000;
    }
}
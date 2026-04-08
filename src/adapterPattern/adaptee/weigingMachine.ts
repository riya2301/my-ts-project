export interface IWeigingMachine {
    getWeight(): number;
}
export class WeigingMachine implements IWeigingMachine {
    getWeight(): number {
        return 100;
    }
}
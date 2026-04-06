export interface IStockObserver{
    update(stockPrice: number): void;
}
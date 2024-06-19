
export interface Order {
    id: number,
    instrumentType: string,
    operation: string,
    ticker: string,
    status: string,
    date: Date,
    settlement: string,
    quantity: number,
    orderType: string,
    operationType: string,
    operationMaxDate?: Date,
    price: number,
    currency: string,
    amount: number,
    externalID?: string,
}

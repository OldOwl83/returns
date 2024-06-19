import {Order} from "./Order.ts";

export class Transaction {
    private purchaseOrder: Order
    private saleOrders: Order[]

    constructor(purchaseOrder: Order, saleOrders: Order[] = []) {
        this.purchaseOrder = purchaseOrder
        this.saleOrders = saleOrders
    }
}
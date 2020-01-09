export class Order
{
    orderId: number;
    orderNumber: string;
    bookId: number;
    quantity: number;
    totalPrice: number;

    constructor(orderNumber: string, bookId: number, quantity: number, totalPrice: number)
    {
        this.orderNumber = orderNumber;
        this.bookId = bookId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
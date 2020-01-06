export class Order
{
    orderId: number;
    bookId: number;
    quantity: number;
    totalPrice: string;

    constructor(bookId: number, quantity: number, totalPrice: string)
    {
        this.bookId = bookId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
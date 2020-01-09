export class Order
{
    orderId: number;
    bookId: number;
    quantity: number;
    totalPrice: number;

    constructor(bookId: number, quantity: number, totalPrice: number)
    {
        this.bookId = bookId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
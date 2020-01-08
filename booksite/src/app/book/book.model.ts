export class Book
{
    bookId: number;
    bookCode: string;
    bookName: string;
    author: string;
    email: string;
    price: number;

    constructor(bookCode: string, bookName: string, author: string, email: string, price: number)
    {
        this.bookCode = bookCode;
        this.bookName = bookName;
        this.author = author;
        this.email = email;
        this.price = price;
    }
}
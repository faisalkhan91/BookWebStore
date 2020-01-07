export class Book
{
    bookId: number;
    bookCode: string;
    bookName: string;
    author: string;
    email: string;
    price: string;

    constructor(bookCode: string, bookName: string, author: string, email: string, price: string)
    {
        this.bookCode = bookCode;
        this.bookName = bookName;
        this.author = author;
        this.email = email;
        this.price = price;
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookSiteAPI.Models
{
    public class Book
    {
        int bookId;
        string bookCode;
        string bookName;
        string author;
        string email;
        string price;

        [Key]
        public int BookId { get => bookId; set => bookId = value; }
        [Required]
        public string BookCode { get => bookCode; set => bookCode = value; }
        [Required]
        public string BookName { get => bookName; set => bookName = value; }
        [Required]
        public string Author { get => author; set => author = value; }
        [Required]
        public string Email { get => email; set => email = value; }
        [Required]
        public string Price { get => price; set => price = value; }
    }
}

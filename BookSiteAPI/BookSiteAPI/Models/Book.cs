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
        string name;
        string author;
        string email;
        string price;

        [Key]
        public int BookId { get => bookId; set => bookId = value; }
        [Required]
        public string Name { get => name; set => name = value; }
        [Required]
        public string Author { get => author; set => author = value; }
        [Required]
        public string Email { get => email; set => email = value; }
        [Required]
        public string Price { get => price; set => price = value; }
    }
}

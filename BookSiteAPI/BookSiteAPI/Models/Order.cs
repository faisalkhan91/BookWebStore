using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookSiteAPI.Models
{
    public class Order
    {
        int orderId;
        int bookId;
        int quantity;
        int totalPrice;

        [Key]
        public int OrderId { get => orderId; set => orderId = value; }
        [Required]
        public int BookId { get => bookId; set => bookId = value; }
        [Required]
        public int Quantity { get => quantity; set => quantity = value; }
        [Required]
        public int TotalPrice { get => totalPrice; set => totalPrice = value; }
    }
}

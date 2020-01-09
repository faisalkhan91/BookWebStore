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
        string orderNumber;
        int bookId;
        int quantity;
        float totalPrice;

        [Key]
        public int OrderId { get => orderId; set => orderId = value; }
        [Required]
        public string OrderNumber { get => orderNumber; set => orderNumber = value; }
        [Required]
        public int BookId { get => bookId; set => bookId = value; }
        [Required]
        public int Quantity { get => quantity; set => quantity = value; }
        [Required]
        public float TotalPrice { get => totalPrice; set => totalPrice = value; }
    }
}

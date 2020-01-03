using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookSiteAPI.Models
{
    public class Order
    {
        int orderId;
        string name;
        string totalPrice;

        public int OrderId { get => orderId; set => orderId = value; }
        public string Name { get => name; set => name = value; }
        public string TotalPrice { get => totalPrice; set => totalPrice = value; }
    }
}

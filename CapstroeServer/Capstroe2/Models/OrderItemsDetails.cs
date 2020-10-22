using System.ComponentModel.DataAnnotations;

namespace Capstroe2.Models
{
    public class OrderItemsDetails
    {
        [Key]
        public int PK { get; set; }
        public int orderID { get; set; }
        public int productId { get; set; }
        public int? quantity { get; set; }
        public double? price { get; set; }
        public string productName { get; set; }
       

    }
}
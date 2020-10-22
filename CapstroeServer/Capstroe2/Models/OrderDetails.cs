using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Capstroe2.Models
{
    public class OrderDetails
    {
        [Key]
        public int orderID { get; set; }
        public string userName { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public bool shiping { get; set; }
        public double price { get; set; }
        public string blessing { get; set; }
        public bool status { get; set; }
        public string comment { get; set; }
        public int? userId { get; set; }
       // [ForeignKey("orderID")]
       // public ICollection<OrderItemsDetails> TblOrderItems { get; set; }
    }
}
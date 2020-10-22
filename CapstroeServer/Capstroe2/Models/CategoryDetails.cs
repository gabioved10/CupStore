using System.ComponentModel.DataAnnotations;

namespace Capstroe2.Models
{
    public class CategoryDetails
    {
        [Key]
        public int categoryID { get; set; }
        public string categoryName { get; set; }
    }
}
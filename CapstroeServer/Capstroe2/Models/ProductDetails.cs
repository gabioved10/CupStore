using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Capstroe2.Models
{
    public class ProductDetails
    {
        [Key]
        public int prductID { get; set; }
        [Required]
        public string productName { get; set; }
        [Required]
        public string productDescription { get; set; }
        [Required]
        public int categoryID { get; set; }

        [Column(TypeName = "text")]
        public string color { get; set; }

        [Column(TypeName = "int")]
        public int? weight { get; set; }

        [Column(TypeName = "int")]
        public int? quntity { get; set; }

        [Column(TypeName = "float")]
        public float? price { get; set; }

        [Column(TypeName = "text")]
        public string imag { get; set; }

        [Column(TypeName = "text")]
        public string Material { get; set; }

        [Column(TypeName = "text")]
        public string Neckfinish { get; set; }

        [Column(TypeName = "text")]
        public string CatNumber { get; set; }

        [Column(TypeName = "text")]
        public string ProductDiameter { get; set; }

        [Column(TypeName = "text")]
        public string ProductHeight { get; set; }

        [Column(TypeName = "text")]
        public string NeckDiameter { get; set; }


    }
}
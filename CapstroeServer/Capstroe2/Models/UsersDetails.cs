using System.ComponentModel.DataAnnotations;

namespace Capstroe2.Models
{
    public class UsersDetails
    {
        [Key]
        public int id { get; set; }
        public string userName { get; set; }
        public string userEmail { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string Password { get; set; }
    }
}
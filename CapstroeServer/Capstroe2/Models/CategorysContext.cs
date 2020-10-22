using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstroe2.Models;

namespace Capstroe2.Models
{
    public class CategorysContext : DbContext
    {
        public CategorysContext(DbContextOptions<CategorysContext> options) : base(options)        {        }        public DbSet<CategoryDetails> TblCategorys { get; set; }
        public DbSet<Capstroe2.Models.OrderDetails> OrderDetails { get; set; }
        public DbSet<Capstroe2.Models.OrderItemsDetails> OrderItemsDetails { get; set; }
        public DbSet<Capstroe2.Models.UsersDetails> UsersDetails { get; set; }
    }
}

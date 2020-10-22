using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstroe2.Models
{
    public class OrderItemsContext : DbContext
    {
        public OrderItemsContext(DbContextOptions<OrderItemsContext> options) : base(options)
        {

        }

        public DbSet<OrderItemsDetails> TblOrderItems { get; set; }
    }
}

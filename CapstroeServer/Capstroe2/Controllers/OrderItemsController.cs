using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstroe2.Models;

namespace Capstroe2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemsController : ControllerBase
    {
        private readonly OrderItemsContext _context;

        public OrderItemsController(OrderItemsContext context)
        {
            _context = context;
        }

        // GET: api/OrderItems
        [HttpGet]
        public IEnumerable<OrderItemsDetails> GetTblOrderItems()
        {
            return _context.TblOrderItems;
        }

        // GET: api/OrderItems/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderItemsDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orderItemsDetails = await _context.TblOrderItems.FindAsync(id);

            if (orderItemsDetails == null)
            {
                return NotFound();
            }

            return Ok(orderItemsDetails);
        }

        // PUT: api/OrderItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderItemsDetails([FromRoute] int id, [FromBody] OrderItemsDetails orderItemsDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orderItemsDetails.orderID)
            {
                return BadRequest();
            }

            _context.Entry(orderItemsDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderItemsDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OrderItems
        [HttpPost]
        public async Task<IActionResult> PostOrderItemsDetails([FromBody] OrderItemsDetails orderItemsDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblOrderItems.Add(orderItemsDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderItemsDetails", new { id = orderItemsDetails.orderID }, orderItemsDetails);
        }

        // DELETE: api/OrderItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderItemsDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orderItemsDetails = await _context.TblOrderItems.FindAsync(id);
            if (orderItemsDetails == null)
            {
                return NotFound();
            }

            _context.TblOrderItems.Remove(orderItemsDetails);
            await _context.SaveChangesAsync();

            return Ok(orderItemsDetails);
        }

        private bool OrderItemsDetailsExists(int id)
        {
            return _context.TblOrderItems.Any(e => e.orderID == id);
        }
    }
}
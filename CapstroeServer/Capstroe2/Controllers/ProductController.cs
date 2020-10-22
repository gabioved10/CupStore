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
    public class ProductController : ControllerBase
    {
        private readonly ProductContext _context;

        public ProductController(ProductContext context)
        {
            _context = context;
        }

        // GET: api/Product
        [HttpGet]
        public IEnumerable<ProductDetails> GetTblProducts()
        {
            return _context.TblProducts;
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productDetails = await _context.TblProducts.FindAsync(id);

            if (productDetails == null)
            {
                return NotFound();
            }

            return Ok(productDetails);
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductDetails([FromRoute] int id, [FromBody] ProductDetails productDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productDetails.prductID)
            {
                return BadRequest();
            }

            _context.Entry(productDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductDetailsExists(id))
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

        // POST: api/Product
        [HttpPost]
        public async Task<IActionResult> PostProductDetails([FromBody] ProductDetails productDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblProducts.Add(productDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductDetails", new { id = productDetails.prductID }, productDetails);
        }

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productDetails = await _context.TblProducts.FindAsync(id);
            if (productDetails == null)
            {
                return NotFound();
            }

            _context.TblProducts.Remove(productDetails);
            await _context.SaveChangesAsync();

            return Ok(productDetails);
        }

        private bool ProductDetailsExists(int id)
        {
            return _context.TblProducts.Any(e => e.prductID == id);
        }
    }
}
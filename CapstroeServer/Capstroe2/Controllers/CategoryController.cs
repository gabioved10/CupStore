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
    public class CategoryController : ControllerBase
    {
        private readonly CategorysContext _context;

        public CategoryController(CategorysContext context)
        {
            _context = context;
        }

        // GET: api/Category
        [HttpGet]
        public IEnumerable<CategoryDetails> GetTblCategorys()
        {
            return _context.TblCategorys;
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategoryDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var categoryDetails = await _context.TblCategorys.FindAsync(id);

            if (categoryDetails == null)
            {
                return NotFound();
            }

            return Ok(categoryDetails);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryDetails([FromRoute] int id, [FromBody] CategoryDetails categoryDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoryDetails.categoryID)
            {
                return BadRequest();
            }

            _context.Entry(categoryDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryDetailsExists(id))
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

        // POST: api/Category
        [HttpPost]
        public async Task<IActionResult> PostCategoryDetails([FromBody] CategoryDetails categoryDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblCategorys.Add(categoryDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryDetails", new { id = categoryDetails.categoryID }, categoryDetails);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var categoryDetails = await _context.TblCategorys.FindAsync(id);
            if (categoryDetails == null)
            {
                return NotFound();
            }

            _context.TblCategorys.Remove(categoryDetails);
            await _context.SaveChangesAsync();

            return Ok(categoryDetails);
        }

        private bool CategoryDetailsExists(int id)
        {
            return _context.TblCategorys.Any(e => e.categoryID == id);
        }
    }
}
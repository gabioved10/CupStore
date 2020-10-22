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
    public class UsersController : ControllerBase
    {
        private readonly UsersContext _context;

        public UsersController(UsersContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<UsersDetails> GetTblUsers()
        {
            return _context.TblUsers;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usersDetails = await _context.TblUsers.FindAsync(id);

            if (usersDetails == null)
            {
                return NotFound();
            }

            return Ok(usersDetails);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsersDetails([FromRoute] int id, [FromBody] UsersDetails usersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usersDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(usersDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersDetailsExists(id))
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

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> PostUsersDetails([FromBody] UsersDetails usersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblUsers.Add(usersDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsersDetails", new { id = usersDetails.id }, usersDetails);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usersDetails = await _context.TblUsers.FindAsync(id);
            if (usersDetails == null)
            {
                return NotFound();
            }

            _context.TblUsers.Remove(usersDetails);
            await _context.SaveChangesAsync();

            return Ok(usersDetails);
        }

        private bool UsersDetailsExists(int id)
        {
            return _context.TblUsers.Any(e => e.id == id);
        }
    }
}
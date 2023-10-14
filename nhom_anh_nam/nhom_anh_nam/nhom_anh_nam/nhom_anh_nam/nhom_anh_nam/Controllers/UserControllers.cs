using Microsoft.AspNetCore.Mvc;
using nhom_anh_nam.Models;
using nhom_anh_nam.Repositories;

namespace nhom_anh_nam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserControllers : ControllerBase
    {
        private readonly IUserRepository _UserRepo;

        public UserControllers(IUserRepository repo)
        {
            _UserRepo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                return Ok(await _UserRepo.GetAllUserAsync());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                var User = await _UserRepo.GetUsersync(id);
                return User == null ? NotFound() : Ok(User);
            }
            catch
            {
                return BadRequest();
            }
            
        }

        [HttpPost]
        public async Task<IActionResult> AddNewUser(UserModels modell)
        {
            try
            {
                var newUserId = await _UserRepo.AddUsersync(modell);
                var User = await _UserRepo.GetUsersync(newUserId);
                return User == null ? NotFound() : Ok(User);

            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserModels modell)
        {
            try
            {
                await _UserRepo.UpdateUserAsync(id, modell);
                return Ok(modell);
            } catch 
            {
                return BadRequest();
            }
          
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            try 
            {
                await _UserRepo.DeleteUsersync(id);

                return Ok("Delete data successfully");
            }
            catch 
            {
                return NotFound();
            }
        }
    }
}

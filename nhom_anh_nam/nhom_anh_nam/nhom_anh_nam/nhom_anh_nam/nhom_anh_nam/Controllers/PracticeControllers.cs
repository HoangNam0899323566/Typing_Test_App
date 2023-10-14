using Microsoft.AspNetCore.Mvc;
using nhom_anh_nam.Models;
using nhom_anh_nam.Repositories;

namespace nhom_anh_nam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PracticeControllers : ControllerBase
    {
        private readonly IPracticeRepository _PracticeRepo;

        public PracticeControllers(IPracticeRepository repo)
        {
            _PracticeRepo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                return Ok(await _PracticeRepo.GetAllPracticeAsync());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPracticeById(int id)
        {
            try
            {
                var Practice = await _PracticeRepo.GetPracticesync(id);
                return Practice == null ? NotFound() : Ok(Practice);
            }
            catch 
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewPractice(PracticeModels modell)
        {
            try
            {
                var newPracticeId = await _PracticeRepo.AddPracticesync(modell);
                var Practice = await _PracticeRepo.GetPracticesync(newPracticeId);
                return Practice == null ? NotFound() : Ok(Practice);

            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePractice(int id, PracticeModels modell)
        {
            try
            {
                await _PracticeRepo.UpdatePracticeAsync(id, modell);
                return Ok(modell);
            }
            catch 
            { 
                return BadRequest();
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePractice([FromRoute] int id)
        {
            try
            {
                await _PracticeRepo.DeletePracticesync(id);

                return Ok("Delete data successfully");
            }
            catch 
            { 
                return NotFound();
            }
        }
    }
}

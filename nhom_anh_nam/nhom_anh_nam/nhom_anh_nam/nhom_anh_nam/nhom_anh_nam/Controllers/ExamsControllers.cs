using Microsoft.AspNetCore.Mvc;
using nhom_anh_nam.Models;
using nhom_anh_nam.Repositories;

namespace nhom_anh_nam.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamsControllers : ControllerBase
    {
        private readonly IExamsRepository _ExamsRepo;

        public ExamsControllers(IExamsRepository repo)
        {
            _ExamsRepo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                return Ok(await _ExamsRepo.GetAllExamsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExamsById(int id)
        {
            try 
            {
                var Exams = await _ExamsRepo.GetExamssync(id);
                return Exams == null ? NotFound() : Ok(Exams);
            }
            catch 
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewExams(ExamsModels modell)
        {
            try
            {
                var newExamsId = await _ExamsRepo.AddExamssync(modell);
                var Exams = await _ExamsRepo.GetExamssync(newExamsId);
                return Exams == null ? NotFound() : Ok(Exams);

            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExams(int id, ExamsModels modell)
        {
           try
           {
                await _ExamsRepo.UpdateExamsAsync(id, modell);
                return Ok(modell);
           }
           catch 
           { 
                return BadRequest(); 
           }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExams([FromRoute] int id)
        {
            try
            {
                await _ExamsRepo.DeleteExamssync(id);

                return Ok("Delete data successfully");
            }
            catch 
            { 
                return BadRequest(); 
            }
        }
    }
}

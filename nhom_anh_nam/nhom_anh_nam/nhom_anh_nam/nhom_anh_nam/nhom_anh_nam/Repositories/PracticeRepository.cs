using AutoMapper;
using Microsoft.EntityFrameworkCore;
using nhom_anh_nam.Data;
using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public class PracticeRepository : IPracticeRepository
    {
        private readonly MyDbContext _context;
        private readonly IMapper _mapper;

        public PracticeRepository(MyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddPracticesync(PracticeModels model)
        {
            var newPractice = _mapper.Map<PracticeData>(model);
            _context.practiceDatas!.Add(newPractice);
            await _context.SaveChangesAsync();

            return newPractice.idStudent;
        }


        public async Task DeletePracticesync(int id)
        {
            var deletePractice = _context.practiceDatas!.SingleOrDefault(b => b.idStudent == id);
            if (deletePractice != null)
            {
                _context.practiceDatas!.Remove(deletePractice);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<PracticeModels>> GetAllPracticeAsync()
        {
            var Practice = await _context.practiceDatas!.ToListAsync();
            return _mapper.Map<List<PracticeModels>>(Practice);
        }

        public async Task<PracticeModels> GetPracticesync(int id)
        {
            var Practice = await _context.practiceDatas!.FindAsync(id);
            return _mapper.Map<PracticeModels>(Practice);
        }

        public async Task UpdatePracticeAsync(int id, PracticeModels model)
        {
            if (id == model.idStudent)
            {
                var updatePractice = _mapper.Map<PracticeData>(model);
                _context.practiceDatas!.Update(updatePractice);
                await _context.SaveChangesAsync();
            }
        }
    }
}

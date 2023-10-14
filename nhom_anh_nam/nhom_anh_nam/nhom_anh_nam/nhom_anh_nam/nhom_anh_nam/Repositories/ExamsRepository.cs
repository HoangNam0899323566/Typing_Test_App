using AutoMapper;
using Microsoft.EntityFrameworkCore;
using nhom_anh_nam.Data;
using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public class ExamsRepository : IExamsRepository
    {
        private readonly MyDbContext _context;
        private readonly IMapper _mapper;

        public ExamsRepository(MyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddExamssync(ExamsModels model)
        {
            var newExams = _mapper.Map<ExamsData>(model);
            _context.examsData!.Add(newExams);
            await _context.SaveChangesAsync();

            return newExams.idTest;
        }


        public async Task DeleteExamssync(int id)
        {
            var deleteExams = _context.examsData!.SingleOrDefault(b => b.idTest == id);
            if (deleteExams != null)
            {
                _context.examsData!.Remove(deleteExams);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<ExamsModels>> GetAllExamsAsync()
        {
            var Exams = await _context.examsData!.ToListAsync();
            return _mapper.Map<List<ExamsModels>>(Exams);
        }

        public async Task<ExamsModels> GetExamssync(int id)
        {
            var Exams = await _context.examsData!.FindAsync(id);
            return _mapper.Map<ExamsModels>(Exams);
        }

        public async Task UpdateExamsAsync(int id, ExamsModels model)
        {
            if (id == model.idTest)
            {
                var updateExams = _mapper.Map<ExamsData>(model);
                _context.examsData!.Update(updateExams);
                await _context.SaveChangesAsync();
            }
        }
    }
}

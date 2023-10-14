using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public interface IExamsRepository
    {
        public Task<List<ExamsModels>> GetAllExamsAsync();
        public Task<ExamsModels> GetExamssync(int id);
        public Task<int> AddExamssync(ExamsModels model);
        public Task UpdateExamsAsync(int id, ExamsModels model);
        public Task DeleteExamssync(int id);
    }
}

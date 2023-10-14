using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public interface IPracticeRepository
    {
        public Task<List<PracticeModels>> GetAllPracticeAsync();
        public Task<PracticeModels> GetPracticesync(int id);
        public Task<int> AddPracticesync(PracticeModels model);
        public Task UpdatePracticeAsync(int id, PracticeModels model);
        public Task DeletePracticesync(int id);
    }
}

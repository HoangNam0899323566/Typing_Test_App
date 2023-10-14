using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public interface IUserRepository
    {
        public Task<List<UserModels>> GetAllUserAsync();
        public Task<UserModels> GetUsersync(int id);
        public Task<int> AddUsersync(UserModels model);
        public Task UpdateUserAsync(int id, UserModels model);
        public Task DeleteUsersync(int id);
  
    }
}

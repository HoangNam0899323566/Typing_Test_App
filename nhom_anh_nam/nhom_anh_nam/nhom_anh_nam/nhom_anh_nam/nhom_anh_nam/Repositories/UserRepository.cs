using AutoMapper;
using Microsoft.EntityFrameworkCore;
using nhom_anh_nam.Data;
using nhom_anh_nam.Models;

namespace nhom_anh_nam.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MyDbContext _context;
        private readonly IMapper _mapper;

        public UserRepository(MyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddUsersync(UserModels model)
        {
            var newUser = _mapper.Map<UserData>(model);
            _context.userData!.Add(newUser);
            await _context.SaveChangesAsync();

            return newUser.idStudent;
        }


        public async Task DeleteUsersync(int id)
        {
            var deleteUser = _context.userData!.SingleOrDefault(b => b.idStudent == id);
            if (deleteUser != null)
            {
                _context.userData!.Remove(deleteUser);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<UserModels>> GetAllUserAsync()
        {
            var User = await _context.userData!.ToListAsync();
            return _mapper.Map<List<UserModels>>(User);
        }

        public async Task<UserModels> GetUsersync(int id)
        {
            var User = await _context.userData!.FindAsync(id);
            return _mapper.Map<UserModels>(User);
        }

        public async Task UpdateUserAsync(int id, UserModels model)
        {
            if (id == model.idStudent)
            {
                var updateUser = _mapper.Map<UserData>(model);
                _context.userData!.Update(updateUser);
                await _context.SaveChangesAsync();
            }
        }
    }
}

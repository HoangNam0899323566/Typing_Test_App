using Microsoft.EntityFrameworkCore;

namespace nhom_anh_nam.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
             #region DbSet
            public DbSet<ExamsData> examsData { get; set; }
            public DbSet<UserData> userData { get; set; }
            public DbSet<PracticeData> practiceDatas { get; set; }
            #endregion
    }
}

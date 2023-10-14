using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nhom_anh_nam.Data
{
    [Table("User")]
    public class UserData
    {
        public string userName { get; set; }
        public DateTime createdDate { get; set; }
        [Key]
        public int idStudent { get; set; }
    }
}

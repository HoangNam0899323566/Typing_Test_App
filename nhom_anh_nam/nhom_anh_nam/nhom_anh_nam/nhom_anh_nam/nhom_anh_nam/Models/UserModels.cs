using System.ComponentModel.DataAnnotations;

namespace nhom_anh_nam.Models
{
    public class UserModels
    {
        public string userName { get; set; }
        public DateTime createdDate { get; set; }
        [Key]
        public int idStudent { get; set; }
    }
}

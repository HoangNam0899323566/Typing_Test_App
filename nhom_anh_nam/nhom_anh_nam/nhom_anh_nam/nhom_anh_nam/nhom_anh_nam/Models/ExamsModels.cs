using System.ComponentModel.DataAnnotations;

namespace nhom_anh_nam.Models
{
    public class ExamsModels
    {
        [Key]
        public int idTest { get; set; }
        public int score { get; set; }
        public string userName { get; set; }
        public int idStudent { get; set; }
        public string course { get; set; }
        public DateTime createdDate { get; set; }
        public string speed { get; set; }
        public string time { get; set; }
    }
}

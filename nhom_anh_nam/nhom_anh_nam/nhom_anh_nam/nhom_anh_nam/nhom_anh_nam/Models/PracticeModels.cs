using System.ComponentModel.DataAnnotations;

namespace nhom_anh_nam.Models
{
    public class PracticeModels
    {
        [Key]
        public int idPractice { get; set; }
        public int score { get; set; }
        public string userName { get; set; }
        public int idStudent { get; set; }
        public string course { get; set; }
        public DateTime createdDate { get; set; }
        public string speed { get; set; }
        public string time { get; set; }
    }
}

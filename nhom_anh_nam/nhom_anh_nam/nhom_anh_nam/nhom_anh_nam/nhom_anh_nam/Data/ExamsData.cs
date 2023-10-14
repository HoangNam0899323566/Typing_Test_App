using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nhom_anh_nam.Data
{
    [Table("Exams")]
    public class ExamsData
    {
        [Key]
        public int idTest {  get; set; }
        public int score { get; set; }
        public string userName { get; set; }
        public int idStudent { get; set; }
        public string course {  get; set; }
        public DateTime createdDate { get; set; }
        public string speed { get; set; }
        public string time { get; set; }
    }
}

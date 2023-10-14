using AutoMapper;
using nhom_anh_nam.Data;
using nhom_anh_nam.Models;

namespace nhom_anh_nam.Helpers
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper()
        {
            CreateMap<ExamsData, ExamsModels>().ReverseMap();
            CreateMap<UserData, UserModels>().ReverseMap();
            CreateMap<PracticeData, PracticeModels>().ReverseMap();
        }
    }
}

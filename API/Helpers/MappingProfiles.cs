using API.DTOs;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductReturnDTO>()
                .ForMember(dest => dest.ProductBrand, o => o.MapFrom(source => source.ProductBrand.Name))
                .ForMember(dest => dest.ProductType, o => o.MapFrom(source => source.ProductType.Name))
                .ForMember(dest => dest.PictureUrl, o => o.MapFrom<ProductURLResolver>());
            
            CreateMap<Address, AddressDTO>().ReverseMap();
            CreateMap<CustomerBasketDTO, CustomerBasket>();
            CreateMap<BasketItemDTO, BasketItem>().ReverseMap();
        }
    }
}
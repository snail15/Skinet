using API.DTOs;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ProductURLResolver : IValueResolver<Product, ProductReturnDTO, string>
    {
        private readonly IConfiguration _config;
        public ProductURLResolver(IConfiguration config)
        {
            _config = config;

        }

        public string Resolve(Product source, ProductReturnDTO destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["APIUrl"] + source.PictureUrl;
            }

            return null;
        }
    }
}
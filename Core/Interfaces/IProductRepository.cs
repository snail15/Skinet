using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
         Task<Product> GetProductByIdAsync(int id);
         Task<List<Product>> GetProductsAsync();
         Task<List<ProductBrand>> GetProductBrandsAsync();
         Task<List<ProductType>> GetProductTypesAsync();
    }
}
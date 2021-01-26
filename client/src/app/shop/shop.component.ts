import { IProductType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brand';
import { ShopService } from './shop.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: IProduct[];
  brands: IBrand[];
  productTypes: IProductType[];
  brandIdSelected: number = 0;
  productTypeIdSelected: number = 0;
  sortSelected: string = 'name';
  sortOptions = [
    {name: 'Alphabetical', value:'name'},
    {name: 'Price: Low to High', value:'priceAsc'},
    {name: 'Price: High to Low', value:'priceDesc'}
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.productTypeIdSelected, this.sortSelected).subscribe(
      res => {
        this.products = res.data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getBrands() {
    this.shopService.getBrands().subscribe(
      res => {
        this.brands = [{id: 0, name: 'All'}, ...res];
      },
      error => {
        console.log(error);
      }
    )
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe(
      res => {
        this.productTypes = [{id: 0, name: 'All'}, ...res];
      },
      error => {
        console.log(error);
      }
    )
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.productTypeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.sortSelected = sort;
    this.getProducts();
  }

}

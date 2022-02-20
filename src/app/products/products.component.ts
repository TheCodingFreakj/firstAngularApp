import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import {PRODUCTS} from "../mock-products"
import { ProductsService } from '../services/product/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsfetched: Product[] = [];

  constructor(private productService: ProductsService) {}

  getProducts(): void {
    
  }

  ngOnInit() {
    this.getProducts();
  }

}

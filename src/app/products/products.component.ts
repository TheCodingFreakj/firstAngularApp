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
  error: any;
  response: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productsfetched = res;
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
  }

}

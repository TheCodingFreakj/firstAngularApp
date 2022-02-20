import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/product';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css'],
})
export class SingleProductPageComponent implements OnInit {
  imageUrl: string = '';
  product: Product | undefined;
  City: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'more'];
  cartItems: any[] = [];
  quantity: any;
  cartItem: { product: any; quantity: any; } | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartServiceService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.imageUrl = this.product?.imageUrls[0] ?? '';

  }

  getProduct(): void {
    const id = this.route.snapshot.params['id'];
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
  onClickCartButton(product: any) {
    this.cartItem = {
      product: product,
      quantity: this.quantity,
    };
    this.cartService.getAllCartElement(this.cartItem)
  }

  chooseQuantity(e: any) {
    this.quantity = e.target.value;
  }
}

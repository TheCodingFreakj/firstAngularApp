import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { Product } from '../../core/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent implements OnInit {
  @Input() product: Product | undefined;
  imageUrl: string = '';
  City: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'more'];
  cartItems: any[] = [];
  quantity: any;
  cartItem = {};

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.imageUrl = this.product?.imageUrls[0] ?? '';
  }

  onClickCartButton(product: any) {
    this.cartItem = {
      product: product,
      quantity: this.quantity || "1",
    };
    this.cartService.getAllCartElement(this.cartItem)
  }

  chooseQuantity(e: any) {
    this.quantity = e.target.value;
  }
}

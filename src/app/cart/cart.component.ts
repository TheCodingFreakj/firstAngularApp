import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isCartExist = false;
  cart: { choosenItems: any[] | undefined; cartshow: boolean } | undefined;
  imageUrl: any;
  total: void | undefined;
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.cartTotal();
    this.cart = this.cartService.getAllCartToShow(this.isCartExist);
    this.total = this.cartService.cartTotal()
  }
}

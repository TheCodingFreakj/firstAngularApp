import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartItems: any[] = [];
  total: any | undefined = '0';
  totalObj: any | undefined;
  price: any | undefined;
  quantity: any | undefined;
  constructor() {}

  getAllCartElement(cartItems: any) {
    let index = this.cartItems.findIndex(
      (x) => x.product.id === cartItems.product.id
    );
    if (index == -1) {
      this.cartItems.push(cartItems);
    }
    return this.cartItems;
  }

  getAllCartToShow(isCartExist: boolean) {
    console.log(this.cartItems);
    if (this.cartItems.length !== 0) {
      isCartExist = true;
    }

    let items = {
      choosenItems: this?.cartItems,
      cartshow: isCartExist,
    };
    return items;
  }
  cartTotal() {
    const values =
      this.cartItems &&
      this.cartItems.map((item) => {
        this.price = item.product.price;
        this.quantity = item.quantity;

        this.total = this.price.toString() * this.quantity.toString();
        return this.total;
      });

    const reducer = (accumulator: any, item: any) => {
      return accumulator + item;
    };

    const total = values.reduce(reducer, 0);
    return total;
  }
}

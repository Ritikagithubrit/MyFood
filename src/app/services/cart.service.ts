import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { BehaviorSubject, Observable } from 'rxjs';

import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(
      (item: any) => item.food.id === food.id
    );
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
  }
  removeCart(foodId: number) {
    this.cart.items = this.cart.items.filter(
      (item: any) => item.food.id != foodId
    );
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
  }
  clearCart() {
    this.cart = new Cart();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}

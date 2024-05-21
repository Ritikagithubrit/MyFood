import { Component } from '@angular/core';
//import { CartItem } from '../shared/models/cartitem';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/cart';
import { CartItem } from '../shared/models/cartitem';
//import { Cart } from '../shared/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  ngOnInit(): void {}
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}

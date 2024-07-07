import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Carts';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
    this.setCart();
  }
  
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.travel.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.travel.id, quantity);
    this.setCart();
  } 
    
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
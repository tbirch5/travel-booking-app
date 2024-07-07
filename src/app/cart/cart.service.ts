import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Carts';
import { travel } from '../shared/models/travel';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(travel: travel):void{
    let cartItem = this.cart.items.find(item => item.travel.id === travel.id);
    if(cartItem) {
      this.changeQuantity(travel.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(travel));
  }

  removeFromCart(travelId:number):void{
    this.cart.items = 
    this.cart.items.filter(item => item.travel.id != travelId);
  }

  changeQuantity(travelId:number, quantity:number){
    let cartItem = this.cart.items.find(item=> item.travel.id === travelId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}

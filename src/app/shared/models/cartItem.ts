import { travel } from "./travel";

export class CartItem{
    constructor(travel:travel) {
        this.travel = travel;
    }
    travel:travel;
    quantity:number = 1;

    get price():number{
        return this.travel.price * this.quantity;
    }
}
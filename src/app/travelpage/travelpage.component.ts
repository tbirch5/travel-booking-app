import { Component, OnInit } from '@angular/core';
import { travel } from '../shared/models/travel';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../travelagenda/travel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';




@Component({
  selector: 'app-travelpage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './travelpage.component.html',
  styleUrl: './travelpage.component.css'
})
export class TravelpageComponent implements OnInit {
  travel!: travel;
  startDate: string = '';
  returnDate: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private travelService: TravelService,
    private cartService: CartService,
    private router: Router


  ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        this.travel = this.travelService.gettravelById(+params['id']);

      }
        
    });

  }

  ngOnInit(): void {
      
  }

  addToCart(): void {
    if (this.startDate && this.returnDate) {
      this.cartService.addToCart(this.travel);
      console.log(`Added to cart: ${this.travel.name}, from ${this.startDate} to ${this.returnDate}`);
      this.router.navigateByUrl('/cart-page'); // Move after the date check
    } else {
      alert('Please select both departure and return dates.');
    }
  }
}
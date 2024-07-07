import { ComponentFixture, TestBed } from '@angular/core/testing';

import { travel } from '../shared/models/travel';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../travelagenda/travel.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';

import { TravelpageComponent } from './travelpage.component';

describe('TravelpageComponent', () => {
  let component: TravelpageComponent;
  let fixture: ComponentFixture<TravelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelpageComponent, CommonModule, FormsModule, RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

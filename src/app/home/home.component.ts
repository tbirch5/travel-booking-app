import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travelagenda/travel.service';
import { CommonModule } from '@angular/common';
import { travel } from '../shared/models/travel';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  travels: travel[] = [];
  allTravels: travel[] = [];

  constructor(private travelService: TravelService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.allTravels = this.travelService.getAll();
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        this.filterTravels(params['searchTerm']);
      } else {
        this.travels = this.allTravels;
      }
      
    });
    
  }
  onSearchTermChange(searchTerm:string):void {
    this.filterTravels(searchTerm);
  }

  private filterTravels(searchTerm: string): void {
    this.travels = this. allTravels.filter(travel =>
      travel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

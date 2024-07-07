import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() searchTermChange= new EventEmitter<string>();
  searchTerm:string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'] || "";
    })
      
  }
  onSearchChange(searchTerm: string): void {

    this.searchTermChange.emit(searchTerm);
  }

  search(): void{

    //additional and future functionality updates can be added here. User currently has realtime search with onSearchChange()


  }

}

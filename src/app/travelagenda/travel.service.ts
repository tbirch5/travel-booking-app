import { Injectable } from '@angular/core';
import { travel } from '../shared/models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor() {}

  gettravelById(id: number): travel {

    return this.getAll().find(travel => travel.id == id)!;
  }

  getAll(): travel[] {
    return [
      {
        id: 1,
        name: 'Banff',
        price: 1200,
        tags: ['North America'],
        location: 'Canada, North America',
        imageUrl: '/assets/imgs/banff-canada.jpg'
      },

      {
        id: 2,
        name: 'Barcelona',
        price: 1500,
        tags: ['Europe'],
        location: 'Spain, Europe',
        imageUrl: '/assets/imgs/barcelona-spain.jpg'
      },


      {
        id: 3,
        name: 'Buenos-Aires',
        price: 2200,
        tags: ['South America'],
        location: 'Argentina, South America',
        imageUrl: '/assets/imgs/buenos-aires-argentina.jpg'
      },



      {
        id: 4,
        name: 'Matamata',
        price: 3000,
        tags: ['Oceania', 'Australia',],
        location: 'New Zealand, Australia',
        imageUrl: '/assets/imgs/matamata-newZealand.jpg'
      },


      {
        id: 5,
        name: 'Morelia',
        price: 1500,
        tags: ['North America'],
        location: 'Mexico, North America',
        imageUrl: '/assets/imgs/morelia-mexico.jpg'
      },


      {
        id: 6,
        name: 'Paris',
        price: 1800,
        tags: ['Europe'],
        location: 'France, Europe',
        imageUrl: '/assets/imgs/paris-france.jpg'
      },


      {
        id: 7,
        name: 'Utah',
        price: 1050,
        tags: ['USA'],
        location: 'USA',
        imageUrl: '/assets/imgs/utah-usa.jpg'
      },












    ];
  }
}

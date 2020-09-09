import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  proxyURL = "https://cors-anywhere.herokuapp.com/";
  shelves = [
    {
      id: 1,
      books: [
        {
          id: 2,
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 12315352345
        }
      ]
    }
  ];
  constructor() { }


}

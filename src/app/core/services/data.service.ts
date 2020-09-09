import { Injectable } from '@angular/core';
import {UUID} from 'uuid-generator-ts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uuid = new UUID();
  proxyURL = "https://cors-anywhere.herokuapp.com/";
  shelves = [
    {
      id: 1,
      name: 'shelve 1',
      books: [
        {
          id: 12312,
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 1
        }
      ]
    },
    {
      id: 2,
      name: 'shelve 2',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 2
        }
      ]
    },
    {
      id: 3,
      name: 'shelve 3',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 2
        }
      ]
    },
    {
      id: 4,
      name: 'shelve 4',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 3
        }
      ]
    },
    {
      id: 5,
      name: 'shelve 5',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 4
        }
      ]
    },
    {
      id: 6,
      name: 'shelve 6',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 5
        }
      ]
    },
    {
      id: 7,
      name: 'shelve 7',
      books: [
        {
          id: this.uuid.getDashFreeUUID(),
          title: 'title',
          image: 'image',
          name: 'name',
          ISBN: 6
        }
      ]
    },
  ];
  constructor() { }

  getShelveDetails(id) {
    let details: object;
    this.shelves.forEach(el => {
      if(el.id === id) details = el
    })
    return details
  }

  deleteShelve(id) {
    this.shelves.forEach((el, i) => {
      if(el.id === id) this.shelves.splice(i,1)
    })
  }

}

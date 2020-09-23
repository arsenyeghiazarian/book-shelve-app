import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if(!localStorage.getItem('app-data')) {
      localStorage.setItem('app-data', JSON.stringify(
        {
                shelves: [],
                savedBooks: {}
              }
      ))
    }
  }
}

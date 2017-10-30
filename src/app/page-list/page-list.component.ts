import { Component, OnInit } from '@angular/core';

interface Hashable {
  getHash(id: number, value: any): string;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit, Hashable {

  works = true;
  now = new Date;

  emails = [
    { from: 'sushil.kumar@gmail.com', subject: 'Hello!' },
    { from: 'muhil.rastogi@gmail.com', subject: 'Please call' },
  ];

  getHash(idx, email) {
    return JSON.stringify(email);
  }
  constructor() { }

  ngOnInit() {
    console.log('initiated');
    setTimeout(() => {
      console.log('5 sec passed');
      this.emails = [
        { from: 'sushil.kumar@gmail.com', subject: 'Hello!' },
        { from: 'muhil.rastogi@gmail.com', subject: 'Please call me ASAP!' },
      ];
    }, 5000);
  }

}

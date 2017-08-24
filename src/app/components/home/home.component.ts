import { Component, OnInit } from '@angular/core';

import { AlbumsService } from './../../services/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ay7aga = 'hi angular';
  aynumber = 8;
  emps = ['ahmed', 'ali', 'heba', 'ola'];
  manger = this.emps[2];

  oneWayName = '';


  students = ['m7med', 'sara', 'ali'];


  lucture = 'html';

  albums;
  constructor() { }

  ngOnInit() {
    // this._albumServe.getAlbums()
    //   .subscribe(res => {
    //       this.albums = res;
    //   });
  }

  clickOne(value: string) {
    this.oneWayName = value;
  }




  add(value: string) {
    this.students.push(value);
  }

}

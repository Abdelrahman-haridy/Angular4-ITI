import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../services/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [ AlbumsService ]
})
export class AlbumsComponent implements OnInit {
albums;
  constructor(
    private _albumsServe: AlbumsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {

  this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this._albumsServe.getAlbums(id).subscribe(res => this.albums = res);
      });


    // this._albumsServe.getAlbums().subscribe(res => this.albums = res);
  }

}

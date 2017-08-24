import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private _http: Http) { }
  getAlbums(id) {
    return this._http.get('http://jsonplaceholder.typicode.com/users/' + id + '/albums')
    .map(res => res.json());
  }
}

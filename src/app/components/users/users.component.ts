import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../services/users-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersServiceService ]
})
export class UsersComponent implements OnInit {
users;
  constructor(
    private _usersService: UsersServiceService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe(
      res => this.users = res
    );
  }

}

import { Component } from '@angular/core';
import { User } from 'src/data/Users';
import UsersService from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: User | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {
    this.user = this.userService.getUser(this.activatedRoute.snapshot.params['id']);
  }


}

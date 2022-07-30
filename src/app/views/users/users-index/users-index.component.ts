import { Component, OnInit } from '@angular/core';
import { IUserVM } from '../../shared/models/user';
import { UserService } from '../../shared/services/users/user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css'],
})
export class UsersIndexComponent implements OnInit {
  users: IUserVM[];
  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.UserService.getUsers<IUserVM[]>().subscribe((res) => {
      if (res) {
        this.users = res;
        console.log('users', res);
      }
    });
  }

  deleteUser(userId: number) {
    let confirmed = confirm('are you sure?');
    if (confirmed) {
      this.UserService.deleteUser(userId).subscribe((res) => {
        let index = this.users.findIndex((u) => u.id == userId);
        this.users.splice(index, 1);
      });
    }
  }
}

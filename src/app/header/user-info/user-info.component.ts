import { Component, OnInit } from '@angular/core';
import { LoginService, User } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  getCurrentUser(): User {
    return this.loginService.getCurrentUser();
  }
  signOut() {
    this.loginService.signOut();
    location.reload();
  }
}

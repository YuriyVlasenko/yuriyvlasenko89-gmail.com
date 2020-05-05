import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: string = '';
  public password: string = '';
  public returnUrl: string = '/';

  constructor(
    private loginService: LoginService,
    private popupService: PopupService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (this.loginService.getCurrentUser()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loginService
      .signIn(this.login, this.password)
      .then(() => {
        this.popupService.showInfoMessage('Ви увішли в систему');
        this.router.navigate([this.returnUrl]);
      })
      .catch((error) => {
        this.popupService.showErrorMessage(error);
      });
  }
  onCancel() {}
}

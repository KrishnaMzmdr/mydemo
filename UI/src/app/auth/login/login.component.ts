import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {errorTitle: '', errorDesc: ''};
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {//console.log(this.authService.isLoggedIn);
	   if (this.authService.isLoggedIn) {
		    this.router.navigateByUrl('/admin/dashboard');
	   }
	   
	  
					this.loginForm = this.fb.group({
					  username: ['', Validators.required],
					  password: ['', Validators.required]
					});
	   
    //this.authService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value).subscribe((data) => {
       if (this.authService.isLoggedIn) {console.log(1);
        //  const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
          this.router.navigateByUrl('/admin/dashboard');
        } else {console.log(2);
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }
}

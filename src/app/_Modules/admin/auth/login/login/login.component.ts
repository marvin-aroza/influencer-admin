import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
//service imports
import { AuthService } from 'src/app/_Core/Services/auth.service';
//Model imports
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  //variables
  loginForm!: FormGroup;
  loadForm:boolean = false;
  isSubmitted:boolean = false;
  fieldTextType:boolean = false ;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creatForm();
  }

  //create formgroup
  creatForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
    this.loadForm = true;
  }

  //form getter property
  get f() {
    return this.loginForm.controls
  }

  //submit for login
  login() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      return
    } else {
      let body = {
        email: this.f['email'].value,
        password: this.f['password'].value
      }
      this.authService.login(body).subscribe(res => {
        if(res.status) {
          this.loginForm.reset();
          this.router.navigate(['/admin']);
        }
      });
    }
  }

  // working of password eye
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    console.log("fine")
  }

}

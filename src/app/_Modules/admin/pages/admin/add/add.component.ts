import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// service
import { AdminService } from 'src/app/_Core/Services/admin.service'
// validators
import { PasswordCheck } from 'src/app/_Core/Validators/confirmPassword'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // varibales
  form!:FormGroup;
  isLoaded = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  // create form group
  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: PasswordCheck('password', 'confirmPassword')
    });

    this.isLoaded = true;
  }

  get f() {
    return this.form?.controls
  }

  // Add admin
  addAdmin() {
    this.isSubmitted = true;
    if(this.form?.invalid)
      return;
    else {
      let body = {
        "firstname": this.f?.['firstname'].value,
        "lastname": this.f?.['lastname'].value,
        "password": this.f?.['password'].value,
        "email": this.f?.['email'].value,
        "role": "Admin"
      }
      this.adminService.addAdmin(body).subscribe(res => {
        if(res.status) {
          this.router.navigate(['/admin/admin']);
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_Core/Services/user.service';
//Swal import
import Swal from 'sweetalert2';
//Required imports
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { CollabService } from 'src/app/_Core/Services/collab.service';
import { AdminService } from 'src/app/_Core/Services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //Variables
  form!: FormGroup;
  form2!: FormGroup;
  formLoaded = false;
  form2Loaded = false;
  isFormSubmitted : Boolean  = false;
  userDetails:any;
  status:any = 'Requested'
  collabList:any = []
  additionalInfo:any = []

  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private fb: FormBuilder,
    private collabService: CollabService
  ) { }

  ngOnInit(): void {
    this.getDetails();
    this.getRequest();
  }

  changeStatus(status: any) {
    this.status = status
    this.getRequest()
  }

  getRequest() {
    let id = localStorage.getItem('id');
    this.collabService.getCollabById(id, this.status).subscribe(res => {
      this.collabList = res.data
    });
  }

  //Create the form instance
  createForm() {
    this.form = this.fb.group({
      first_name: [this.userDetails.firstname, Validators.required],
      last_name: [this.userDetails.lastname, Validators.required],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
    })
    this.formLoaded = true;
  }



  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }



  update() {
    this.isFormSubmitted = true;
    let id = localStorage.getItem('id');

    if(this.form.invalid) {
      return
    }

    let formData = {
      "firstname": this.f?.['first_name'].value,
      "lastname": this.f?.['last_name'].value,
      "email": this.f?.['email'].value
    }

    this.adminService.updateAdmin(formData, id).subscribe(res => {
      if(res.status) {
            this.ngOnInit();
          }
    });
  }

  getDetails() {
    let id = localStorage.getItem('id');
    this.userService.getAdminById(id).subscribe(res => {
      this.userDetails = res.data[0]
      this.additionalInfo = this.userDetails.additional_info[0]
      console.log(this.userDetails.firstname);
      this.createForm();
    });
  }

  //upload profile image
  uploadProfileImage(event:any) {
    const file = (event.target as HTMLInputElement).files![0];
    const formData = new FormData()
    formData.append('image', file);
    let id = localStorage.getItem('id');
    this.userService.updateProfileImage(id, formData).subscribe(res => {
      console.log(res);
      if(res.status) {
        Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.ngOnInit();
            // this.valueChanged = false;
            // this.enableFields('');
            // this.getUserDetails();
            // this.reloadService.reloadNewLogic();
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

}

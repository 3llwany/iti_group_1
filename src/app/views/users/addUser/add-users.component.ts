import { CustomeValidator } from './../../shared/validators/customeValid.validator';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IUserVM } from '../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/users/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  userId: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private UserService: UserService,
    private toastr: ToastrService
  ) {
    route.queryParamMap.subscribe((params) => {
      this.userId = Number(params.get('userId'));
      console.log('userId', this.userId);
      if (this.userId) this.getUserById(this.userId);
    });
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, CustomeValidator.whiteSpace]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/[0-9]+$/),
          Validators.minLength(11),
          Validators.maxLength(11),
          CustomeValidator.startsWith,
        ],
      ],
      username: ['', [Validators.required, CustomeValidator.noSpace]],
      website: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        suite: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
      }),
      company: this.fb.group({
        bs: ['', [Validators.required]],
        catchPhrase: ['', [Validators.required]],
        name: ['', [Validators.required]],
      }),
    });
  }
  get FormCtrls() {
    return this.myForm.controls;
  }

  get addres() {
    return this.myForm.get('address');
  }
  get company() {
    return this.myForm.get('company');
  }

  getUserById(userId: number) {
    this.UserService.getUserById<IUserVM[]>(userId).subscribe((res) => {
      if (res) {
        this.myForm.patchValue(res);
        console.log('user', res);
      }
    });
  }

  addUser() {
    this.submitted = true;
    if (this.myForm.valid) {
      let user: IUserVM = this.myForm.value;
      this.UserService.addUser<IUserVM>(user).subscribe((res) => {
        if (res) {
          console.log('onAdd', res);
          this.toastr.success('user added!');
          this.myForm.reset();
          this.submitted = false;
        }
      });
    }
  }

  updateUser() {
    this.submitted = true;
    if (this.myForm.valid) {
      let user: IUserVM = this.myForm.value;
      this.UserService.updateUser<IUserVM>(user, this.userId).subscribe(
        (res) => {
          if (res) {
            console.log('onUpdate', res);
            this.toastr.info('user updated!');
            this.submitted = false;
          }
        }
      );
    }
  }
}

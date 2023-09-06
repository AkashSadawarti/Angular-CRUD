import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'title': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'completed': new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  }

  createUser() {
    // console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      console.log("user Created");
      this._snackBar.open("Congratulations...User created Successfully")
    }, err => {
      console.log(err);
      this._snackBar.open("Sorry...Unable to create user...")
    })
  }

}

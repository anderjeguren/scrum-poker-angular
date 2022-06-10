import { Component, OnInit, Inject} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log("Init Login Component");
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

}

@Component({
  selector: 'dialog-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login.component.css']
})
export class DialogComponent  {


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Login) {}

  close() {
    this.dialogRef.close();
  }

}

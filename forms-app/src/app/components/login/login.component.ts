import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {
    name: 'Kyle'
  };

  name = new FormControl();

  constructor() { }

  ngOnInit() {
    this.name.setValue(this.user.name);
  }

  updateName() {
    this.user.name = this.name.value;
  }


}

import { Component, OnInit } from '@angular/core';
import { Credential, DEFAULT_CREDENTIAL_OBJECT } from 'src/models/credentials';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  credential: Credential = DEFAULT_CREDENTIAL_OBJECT;
  constructor() { }

  ngOnInit() {
  }

  login() {
    //Hacer el login o el signup
  }

}

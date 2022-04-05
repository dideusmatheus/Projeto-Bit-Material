import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  log_email!: string;
  log_password!: string;

  reg_nome!: string;
  reg_email!: string;
  reg_password!: string;
  reg_confirm_password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(){}

  registrar(){}


}

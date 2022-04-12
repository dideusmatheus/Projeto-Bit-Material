import { Router } from '@angular/router';
import { CreateCrudComponent } from './../../crud/create-crud/create-crud.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(CreateCrudComponent, { width: '50%'});
  }

  userTable(){
    this.router.navigate(['crud']);
  }

  login(){
    this.router.navigate(['home']);
  }

}


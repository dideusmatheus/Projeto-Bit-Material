import { Usuario } from './../../home/usuario';
import { CrudService } from './../crud.service';

import { Component, InjectionToken, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-read-crud',
  templateUrl: './read-crud.component.html',
  styleUrls: ['./read-crud.component.css']
})
export class ReadCrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; // faz a paginação
  @ViewChild(MatSort) sort!: MatSort; // faz a ordenação dos dados


  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.read().subscribe({
      next: (res: any) => {
        //console.log(res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logar(){}

}





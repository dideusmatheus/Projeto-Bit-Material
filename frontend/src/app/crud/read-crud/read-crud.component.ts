import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { StorageService } from './../../autenticacao/session-storage/storage.service';

import { UpdateCrudComponent } from './../update-crud/update-crud.component';

import { CrudService } from './../crud.service';

import { Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



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


  constructor(private crudService: CrudService,
    private dialog: MatDialog,
    private storageService: StorageService,
    private router: Router,
    private authService: AutenticacaoService) { }

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

  editarUser(user: any) {
    this.dialog.open(UpdateCrudComponent, {
      width: '50%'
    })

    this.storageService.save("dadosUser", user);
  }

  openDialog(templateRef: any) {
    this.dialog.open(templateRef, {
      width: "40%"
    })
  }

  deletarUser(userId: any) {
    this.crudService.delete(userId).subscribe(() => {
      alert('Usuario deletado com sucesso!');
      this.router.navigate(['crud']);
      this.authService.atualizarComponente();
      this.dialog.closeAll();
    })

  }

  cancel() {
    this.dialog.closeAll();
  }



}





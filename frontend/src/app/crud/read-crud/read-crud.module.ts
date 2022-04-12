import { MatInputModule } from '@angular/material/input';
import { ReadCrudComponent } from './read-crud.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ReadCrudComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    ReadCrudComponent
  ],
  bootstrap: []
})
export class ReadCrudModule { }

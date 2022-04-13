import { UpdateCrudModule } from './update-crud/update-crud.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCrudComponent } from './create-crud/create-crud.component';
import { ReadCrudModule } from './read-crud/read-crud.module';
import { CreateCrudModule } from './create-crud/create-crud.module';
import { CrudComponent } from './crud.component';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    CreateCrudModule,
    ReadCrudModule,
    UpdateCrudModule
  ],
  exports: [
    CreateCrudComponent
  ],
  bootstrap: []
})
export class CrudModule { }

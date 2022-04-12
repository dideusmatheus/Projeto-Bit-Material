
import { HomeComponent } from './home/home.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { //3B- criando a rota
    path: '', // caso o usuario acessar o site sem nenhuma rota difinida ele vai acessar a pagina de home
    pathMatch: 'full', // esse atributo informa o angula para tirar os espaços em branco da rota
    redirectTo: 'home', // se acessar a rota em branco sera redirecionado para home
  },
  {
    path: 'home',
    component: HomeComponent ,
  },
  {
    path: 'crud',
    component: CrudComponent
  }
  //  {
  //   path: 'crud',
  //   component: CrudCreateComponent,
  // },
  // {
  //   path: 'crud/update/:id',
  //   component: CrudUpdateComponent,
  // },
  // {
  //   path: 'crud/delete/:id',
  //   component: CrudDeleteComponent,
  // }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

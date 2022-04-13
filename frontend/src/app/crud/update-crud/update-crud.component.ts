import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from './../../autenticacao/session-storage/storage.service';
import { Usuario } from './../../home/usuario';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-update-crud',
  templateUrl: './update-crud.component.html',
  styleUrls: ['./update-crud.component.css']
})
export class UpdateCrudComponent implements OnInit {

  user!: Usuario;
  //user: any = sessionStorage.getItem('dadosUser');
  updateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private sessionService: StorageService,
    private crudService: CrudService,
    private router: Router,
    private authService: AutenticacaoService) { }

  ngOnInit() {

    this.updateForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      userConfirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })

    setTimeout(() => {
      this.preencherCampos()
    }, 100);

    //  console.log(this.user);

  }

  atualizar() {
    const data = this.updateForm.getRawValue();
    const dadosAntigos = this.sessionService.get('dadosUser');
    //console.log(dadosAntigos.id);

    this.crudService.update(dadosAntigos.id, data).subscribe(()=>{
      alert('Usuario atualizado!');
      this.router.navigate(['crud']);
      this.authService.atualizarComponente();
    })

  }

  preencherCampos() {
    const lala = this.sessionService.get('dadosUser');

    this.updateForm.get('userName')?.setValue(lala.userName);
    this.updateForm.get('userEmail')?.setValue(lala.userEmail);
    this.updateForm.get('userPassword')?.setValue(lala.userPassword);
    this.updateForm.get('userConfirmPassword')?.setValue(lala.userConfirmPassword);
  }


}

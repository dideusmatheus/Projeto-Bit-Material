import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-crud',
  templateUrl: './create-crud.component.html',
  styleUrls: ['./create-crud.component.css']
})
export class CreateCrudComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.novoUsuarioForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      userConfirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })
  }

  registrar() {
    //pega todos os valores do form pra criar o novo usuario, mas nao vai usar porque vou fazer a comparação das senhas
    //const newUser = this.registrarForm.getRawValue() as Usuario;

    const newUser: any = {
      userName: this.novoUsuarioForm.get('userName')?.value,
      userEmail: this.novoUsuarioForm.get('userEmail')?.value,
      userPassword: this.novoUsuarioForm.get('userPassword')?.value,
      userConfirmPassword: this.novoUsuarioForm.get('userConfirmPassword')?.value,
    }

    if (newUser.userPassword === newUser.userConfirmPassword) {
      this.authService.registrarAuth(newUser).subscribe({
        next: () => {
          alert('Usuário Registrado!');
          this.novoUsuarioForm.reset();
          this.authService.atualizarComponente();
        },
        error: err => {
          alert('Erro!');
          console.log(err);
        }

      });
      return
    }
    alert('Senha e confimarção de senha incorretas!!');

  }//fim da função registrar



}

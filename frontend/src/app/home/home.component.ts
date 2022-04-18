import { SnackbarService } from './../snackbar/snack-bar.service';
import { Usuario } from './usuario';
import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm!: FormGroup;
  registrarForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      log_Email: ['', [Validators.required, Validators.email]],
      log_Password: ['', Validators.required],
    });

    this.registrarForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      userConfirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })
  }

  login() {
    //salvando o valor do input log_Email na variavel userEmail
    const userEmail = this.loginForm.get('log_Email')?.value;
    const userPassword = this.loginForm.get('log_Password')?.value;
    // console.log(userEmail);
    // console.log(userPassword);

    this.authService.loginAuth(userEmail).subscribe({
      next: (user) => {
        if (user.length == 0) {
          this.snackbar.addWarning('Usuário não encontrado!');
        } else
          if (user[0].userPassword == userPassword) {
            this.snackbar.addSuccess('Usuário logado com sucesso!');
            this.router.navigate(['crud']);

          } else
            if (user[0].userPassword != userPassword) {
              this.snackbar.addWarning('Senha invalida!');
            }
      },
      error: err => {
        this.snackbar.addError(err);
      }

    })
  }// fim da função login

  registrar() {
    //pega todos os valores do form pra criar o novo usuario, mas nao vai usar porque vou fazer a comparação das senhas
    //const newUser = this.registrarForm.getRawValue() as Usuario;

    const newUser: any = {
      userName: this.registrarForm.get('userName')?.value,
      userEmail: this.registrarForm.get('userEmail')?.value,
      userPassword: this.registrarForm.get('userPassword')?.value,
      userConfirmPassword: this.registrarForm.get('userConfirmPassword')?.value,
    }

    if (newUser.userPassword === newUser.userConfirmPassword) {
      this.authService.registrarAuth(newUser).subscribe({
        next: () => {
          this.snackbar.addSuccess('Usuário Registrado!');
          this.registrarForm.reset();
          this.authService.atualizarComponente();
        },
        error: err => {
          this.snackbar.addError(err);
        }

      });
      return
    }
    this.snackbar.addWarning('Senha e confimarção de senha incorretas!!');
  }//fim da função registrar

}

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
    MensagemComponent
  ]
})


export class MensagemModule{}

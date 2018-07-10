import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { ModelUsuario } from '../model/usuario.model';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email':new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {

  }

  public autenticar(): void {
    console.log(this.formulario);
    // let usuario: ModelUsuario = new ModelUsuario(
    //   this.formulario.value.email,
    //   this.formulario.value.senha
    // );
    this.auth.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    );
  }

}

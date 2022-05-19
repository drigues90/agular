import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {login: '',password: ''}

  constructor(){
  }

  ngOnInit(): void {
  }

  logar(){
    console.log('logando usuario ...',this.usuario);
  }

}

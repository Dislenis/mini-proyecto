import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/user';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})



export class RegistroComponent implements OnInit {


  constructor(private userService:UserService) { }
  nombre:string;
  apellido:string;
  telefono:string;
  pass:string;
  correo:string;

  ngOnInit(): void {
  
  }
  
  user:User;
  public probar(id:number){
    this.userService.getUsuario(id)
    .subscribe(user => this.user = user);
  }



  public validarPassword(){
    var valid = true;
    
    var validation;
    validation = this.pass.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

    if(validation == null){
      valid = false;
    }
    valid = valid && this.pass.length >= 4;
  
    alert(valid);
    return valid;
    
  }


}


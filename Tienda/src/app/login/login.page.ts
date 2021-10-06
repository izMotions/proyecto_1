import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  //metodo que recibe la informacion del form
  login(form){

    //console.log(form.value)  //primera opcion 

    var usuario = form.value["usuario"];
    var contrasenia = form.value["contrasenia"];

    if(usuario == "admin" && contrasenia =="123"){
      //enviar al home
      this.router.navigate(['/productos'])

    }

  }

}

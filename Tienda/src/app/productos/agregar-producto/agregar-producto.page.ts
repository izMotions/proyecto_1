import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productoServicio:ProductosService, private router : Router) { }

  ngOnInit() {
  }

  //metodo para agregar
  agregarProducto(nombre,url,comentario){

    var lista = []

    if(comentario.value !==""){
      lista.push(comentario.value)

    }else{
      lista=null;
    }


    this.productoServicio.addProductos(nombre.value,url.value,lista);
    this.router.navigate(['/productos'])

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';//enrrutar
import { ProductosService } from '../productos.service';//servicio
import { Producto } from './producto.model';



@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos : Producto;

  //el activatedRoute más claro es solo una variable creada por nosotros,puede tener cualquier nombre
  //creamos una variable para capturar la URL activa
  constructor(private activatedRoute : ActivatedRoute , private productoServicio: ProductosService ,
    private route: Router) { }

  ngOnInit() {

    //vamos a buscar el producto por el ID que viene en la URL
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      //vamos a capturar el id que esta en la URL
      const valor = paramMap.get('pID')
      console.log("id del producto : "+ valor)


      //llamamos al servicio y le pasamos el id
      this.datos = this.productoServicio.getProductosById(valor)
      console.log(this.datos)
    })
  }

  //agregamos el metodo para eliminar
  eliminar(){
    console.log("eliminado")
    this.productoServicio.deleteProductos(this.datos.id)
    //redireccionar a la pagina de productos
    this.route.navigate(['productos']);
  }



}

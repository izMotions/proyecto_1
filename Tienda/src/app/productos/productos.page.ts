import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = [
    {
      id : '1',
      nombre : 'testeo',
      imagenURL : 'http://www.missingnumber.com.mx/wp-content/uploads/2017/05/MegaMan-Figuras-2.jpg',
      //SE PUEDE CREAR UNA LISTA DE COMENTARIO AGREGANDO UN []
      comentarios : ['comentario de testeo 1', 'lista de comentario 2']
    },
    //ALT + SHIFT + ABAJO PARA COPIAR TODO Y PEGARLO
    {
      id : '1',
      nombre : 'testeo',
      imagenURL : 'http://www.missingnumber.com.mx/wp-content/uploads/2017/05/MegaMan-Figuras-2.jpg',
      comentarios : ['comentario de testeo 1', 'lista de comentario 2']
    },


  ]

  constructor() { }

  ngOnInit() {
  }

}

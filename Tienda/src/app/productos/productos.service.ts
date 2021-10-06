import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id : '1',
      nombre : 'testeo',
      imagenURL : 'https://ae01.alicdn.com/kf/HTB19JFfetzJ8KJjSspkxh6F7VXaa/Mostrar-Z-Tienda-TungMung-EX-Omegamon-Omega-X-Digital-Monster-Figura-de-Acci-n.jpeg_Q90.jpeg_.webp',
      //SE PUEDE CREAR UNA LISTA DE COMENTARIO AGREGANDO UN []
      comentarios : []
    },
    //ALT + SHIFT + ABAJO PARA COPIAR TODO Y PEGARLO
    {
      id : '2',
      nombre : 'testeo',
      imagenURL : 'http://www.missingnumber.com.mx/wp-content/uploads/2017/05/MegaMan-Figuras-2.jpg',
      comentarios : ['comentario de testeo 1', 'lista de comentario 2']
    },


  ]



  constructor() { }

  //buscar todos los productos
  getProductos(){
    //retornamos una lista de productos
    return [...this.productos]
  }

  //buscar los producttos por id
  //nosotros inventados la variable , en este caso productoID
  getProductosById(productoId : string){ 
    return{
      //se busca un elemento por su id y se retorna un objeto
      ...this.productos.find(serv =>{
        return serv.id === productoId
    } )}
  }

  //agregar productos
  //nomb , imgURL son parametros que creamos nosotros, totalmente distinto a lo otro
  //agregamos un producto nuevo a la lista
  //el id corresponde al ultimo elemento registrado +1
  addProductos(nombre : string, imagenURL : string, comentarios : string []){
    this.productos.push({
      id : this.productos.length + 1 + "",
      nombre ,
      imagenURL , 
      comentarios 
    });
  


  }



  //eliminar productos
  deleteProductos(productoId: string){
    //se crea un arreglo nuevo eliminando el registro que tiene el id que estoy buscando
    //se busca un elemento por id y este elemento se quita de la lista
    //luego se sobreescribe la variable productos
    this.productos = this.productos.filter(serv =>{
                      return serv.id !== productoId
      
    })
  }
}
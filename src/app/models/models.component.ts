export interface Merienda{
  
  platoFuerte: string;
  jugo: string;
  

}

export interface Menu{
  sopa: string;
  platoFuerte: string;
  jugo: string;
  cubiertos: number;
  imagen: string;
  

}
export interface Pedidos {
pedido1:{
nombre: string;
telefono: number
  }
pedido2:{
nombre: string;
telefono: number
      }
viandas?: string;
id: string;
}

export interface UserI {
  nombre: string;
  direccion: string;
  celular: number;
  correo: string;
  uid: string;
  password: string;
  perfil: 'cliente'| 'admin',
}

export interface Local {
  lunes: {
    descripcion: string;
    ubicacion: string;
    foto: string;
  };
  
} 





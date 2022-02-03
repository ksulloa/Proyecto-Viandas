export interface UserI {
  nombre: string;
  correo: string;
  uid: string;
  password: string;
  perfil: 'cliente'| 'admin',
}

export interface Restaurantes {
    nombre: string;
    restid: string;
    descripcion: string;
    numero: number;
    direccion: string;
    ubicacion: string;
    foto: string;
    valoracion?: number;
    numValoraciones?:number;
  }

export interface Valoracion{
  valor: number
}
export interface Platillos{
  restid: string;
  nombre: string;
  descripcion: string;
  precio: number;
  foto: string;
}
  
 




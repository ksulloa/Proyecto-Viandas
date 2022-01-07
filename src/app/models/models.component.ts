export interface UserI {
  nombre: string;
  direccion: string;
  celular: number;
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
    ubicacion: string;
    foto: string;
    valoracion?: number;
    numValoraciones?:number;
  }
  
  
 




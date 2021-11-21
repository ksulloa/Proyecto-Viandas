export interface Merienda{
  
  platoFuerte: string;
  jugo: string;
  mesa: 'C'| 'P';

}

export interface Menu{
  sopa: string;
  platoFuerte: string;
  jugo: string;
  cubiertos: number;
  mesa: 'C'| 'P';
  imagen: string;
  

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

import { CarritosComponent } from './componentes/carritos/carritos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ValoracionComponent } from './componentes/valoracion/valoracion.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';




import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
  
    path: 'bienvenidos', component:  BienvenidosComponent
    },
    {
      path: 'login', component: LoginComponent
    },
   
    {
      path: 'menu', component: MenuComponent
    },

    {
      path: 'servicios', component: ServiciosComponent
    },
    {
      path: 'valoracion', component: ValoracionComponent
    },
    {
      path: 'registro', component: RegistroComponent
    },
    {
      path: '', component: BienvenidosComponent
      
    },
    {
      path: '**', redirectTo:'bienvevidos', pathMatch:'full' 
      
    },
    {
      path: 'carritos', component: CarritosComponent
    }
  
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  login: boolean= false;
  rol: 'cliente'| 'empresa'= 'empresa'

  constructor(private router: Router,
    private popoover: PopoverController) { }

  ngOnInit() {}

  irLogin(){
    console.log('di click en login');
    this.router.navigate(['/login'])
    this.popoover.dismiss();
    
  }
  irServicios(){
    console.log('di click en servicios');
    this.router.navigate(['/servicios'])
    this.popoover.dismiss();
    
  }

  irValoracion(){
    console.log('di click en valoracion');
    this.router.navigate(['/valoracion'])
    this.popoover.dismiss();
    
  }

}

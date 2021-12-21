import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.scss'],
})
export class PremiosComponent implements OnInit {

  input: number = 0;
  puntos: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {}

  ingresar(){
    this.puntos = this.puntos + this.input
  }



}
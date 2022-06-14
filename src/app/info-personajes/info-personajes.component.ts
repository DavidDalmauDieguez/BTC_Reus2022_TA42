import { Component, OnInit } from '@angular/core';
import { DetallesPersonajesService } from "../detalles-personajes.service";

@Component({
  selector: 'app-info-personajes',
  templateUrl: './info-personajes.component.html',
  styleUrls: ['./info-personajes.component.css']
})
export class InfoPersonajesComponent implements OnInit {

    title = 'infoPersonajes';

    tarjetas:any = null;

    constructor(private detallesPersonajes: DetallesPersonajesService){}

    ngOnInit() {
      this.tarjetas = this.detallesPersonajes.retornar();
    }

  }



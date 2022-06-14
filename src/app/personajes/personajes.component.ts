import { Component, OnInit } from "@angular/core";
import { DetallesPersonajesService } from "../detalles-personajes.service";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit{
  title = 'personajes';

  tarjetas:any = null;

  constructor(private detallesPersonajes: DetallesPersonajesService){}

  ngOnInit() {
    this.tarjetas = this.detallesPersonajes.retornar();
  }
}

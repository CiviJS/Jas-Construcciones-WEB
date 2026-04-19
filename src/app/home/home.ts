import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  N1: number;
  N2: number;
  ruta1: string;
  ruta2: string;
  //totalFotos: number = 21;
  totalFotos: number = 13;
  // eleccion de fotos aleatoria
  TextoP1 = "Profesional con amplia experiencia en supervisión de obras civiles, mantenimiento locativo e industrial. Con más de 10 años de trayectoria en el sector de la construcción, se destaca por su liderazgo, responsabilidad y compromiso con la seguridad y la calidad en los proyectos ejecutados.";
  TextoP2 = "Bienvenidos a Estructuras Metal Mecánica JS, su socio confiable en la construcción y fabricación de estructuras metálicas de alta calidad.";

  P1: string = "";
  P2: string = "";

  velocidad: number = 30; 

  constructor() {
    this.N1 = Math.floor(Math.random() * this.totalFotos) + 1;
    this.N2 = Math.floor(Math.random() * this.totalFotos) + 1;

    while (this.N1 === this.N2) {
      this.N2 = Math.floor(Math.random() * this.totalFotos) + 1;
    }

    this.ruta1 = '/assets/images/foto' + this.N1 + '.png';
    this.ruta2 = '/assets/images/foto' + this.N2 + '.png';
  }

  ngOnInit(): void {
    this.escribirTexto(this.TextoP1, 'P1');
    this.escribirTexto(this.TextoP2, 'P2');
  }

  escribirTexto(texto: string, propiedad: 'P1' | 'P2', i: number = 0) {
    if (i < texto.length) {
      this[propiedad] += texto[i];
      this.velocidad -= 0.1;
      setTimeout(() => this.escribirTexto(texto, propiedad, i + 1), this.velocidad);
    }
  }
}

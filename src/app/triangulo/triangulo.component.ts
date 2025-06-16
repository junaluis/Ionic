import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonButton, IonItem, IonText, IonInput } from "@ionic/angular/standalone";
import { TrianguloEscaleno } from '../modelo/TrianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule,IonInput, IonText, IonItem, IonButton, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class TrianguloComponent  implements OnInit {
  

resultado: string="";
LadoCStr: String="";
LadoBStr: string="";
LadoAStr: string="";

  constructor() { }

  ngOnInit() {}

calcularPerimetro() {
 const ladoA = parseFloat(this.LadoAStr as string);
 const ladoB = parseFloat(this.LadoBStr as string);
 const ladoC = parseFloat(this.LadoCStr as string);

  const figura = new TrianguloEscaleno(ladoA, ladoB, ladoC);
  const perimetro = figura.calcularPerimetro();
  this.resultado = `Perímetro es : ${perimetro.toFixed(2)} cm`;

}

}

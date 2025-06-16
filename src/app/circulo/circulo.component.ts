import { Component, OnInit } from '@angular/core';
import {  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonItem, IonButton, IonText, IonInput } from "@ionic/angular/standalone";
import { FormsModule} from '@angular/forms';
import { Circulo } from '../modelo/Circulo';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonInput, IonText, IonButton, IonItem, IonImg,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class CirculoComponent  implements OnInit {

RadioStr: string="";
resultado: string="";


  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
  const radio = parseFloat(this.RadioStr);
  const figura = new Circulo(radio);
  const perimetro = figura.calcularPerimetro();
  this.resultado = `Perímetro es: ${perimetro.toFixed(2)} cm`;
}

   
}

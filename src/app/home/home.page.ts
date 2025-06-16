import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonItem, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { IonSelectCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule,IonItem, IonSelectOption,IonSelect,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CirculoComponent, TrianguloComponent]
})

export class HomePage implements OnInit {

tipoFigura:string ="";


  constructor() { }

  esCirculo(){return this.tipoFigura=="circulo"}
  esTriangulo(){return this.tipoFigura=="triangulo"}

  ngOnInit() {
  }

   seleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
   this.tipoFigura= $event.detail.value
}


}

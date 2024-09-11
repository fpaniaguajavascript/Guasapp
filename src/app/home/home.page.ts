import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { FirebaseRTBService } from '../services/firebase-rtb.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonList, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public mensajes: string[] = [];
  public from: string = "";
  public to: string = "";
  public message: string = "";
  constructor(public firebaseService: FirebaseRTBService) {
    this.mensajes = this.firebaseService.mensajes;
  }
  public enviar() {
    console.log("Enviando...");
  }
}

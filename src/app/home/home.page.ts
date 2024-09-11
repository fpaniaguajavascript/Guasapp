import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { FirebaseRTBService } from '../services/firebase-rtb.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const ALIAS_KEY = "ALIAS"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, FormsModule, CommonModule, IonList, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public mensajes: any[] = [];
  public from: string = "";
  public message: string = "";
  public registrado: boolean = false;
  constructor(public firebaseService: FirebaseRTBService) {
    this.mensajes = this.firebaseService.mensajes;
    let alias = localStorage.getItem(ALIAS_KEY);
    if (alias) {
      this.registrado = true;
      this.from = alias;
    }
  }
  public registrarUsuario() {
    localStorage.setItem(ALIAS_KEY, this.from)
    this.registrado = true;
  }
  public enviar() {
    this.firebaseService.enviarMensaje(this.from, this.message);
    this.message = "";
  }
}

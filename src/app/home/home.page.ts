import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { FirebaseRTBService } from '../services/firebase-rtb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public mensajes: string[] = [];
  constructor(private firebaseService: FirebaseRTBService) {
    this.mensajes = this.firebaseService.mensajes;
  }
}

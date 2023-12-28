// Servicio firebase
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Configuración de Firebase
  firebaseConfig = {
    apiKey: "AIzaSyCMM8IoroOI_EBKp_32bXlmR_qzhqq57QE",
    authDomain: "pelikulas-app-diego.firebaseapp.com",
    projectId: "pelikulas-app-diego",
    storageBucket: "pelikulas-app-diego.appspot.com",
    messagingSenderId: "705286051529",
    appId: "1:705286051529:web:a11e8ed068ffa8bd7fdf18",
    measurementId: "G-M41N3K7PY4"
  };

  // Inicializar Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  constructor() { }
}

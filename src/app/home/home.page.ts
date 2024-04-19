import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private db!: firebase.database.Reference;

  uno: number = 0;
  dos: number = 0;
  tres: number = 0;
  cuatro: number = 0;
  cinco: number = 0;
  seis: number = 0;

  ngOnInit() {
    const app = firebase.initializeApp(environment.firebase);
    this.db = app.database().ref();

    this.leerVariables();
  }

  constructor() {}

  leerVariables() {
    this.db.on('value', (snapshot: firebase.database.DataSnapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.uno = data.uno;
        this.dos = data.dos;
        this.tres = data.tres;
        this.cuatro = data.cuatro;
        this.cinco = data.cinco;
        this.seis = data.seis;

        console.log(`Variables leídas: uno=${this.uno}, dos=${this.dos}, tres=${this.tres}, cuatro=${this.cuatro}, cinco=${this.cinco}, seis=${this.seis}`);
      } else {
        console.log('No hay datos disponibles');
      }
    });
  }
}

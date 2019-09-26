import { Component, Injectable} from '@angular/core';
//Importamos la libreria de firebase database
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	//Definido las variables con su tipo de dato
	
	mensaje : string = '';
	listado : any = [];
	//Agregamos a nuestro codigo la libreria importada

	constructor(
		public afDB: AngularFireDatabase
	){}
	//Creamos una funcion que enviara los datos a firebase

	guardar() {
		this.listado.push(this.mensaje);
		this.mensaje = "";
	}
    
    asustar(){
    	  alert("buu");
    }

}

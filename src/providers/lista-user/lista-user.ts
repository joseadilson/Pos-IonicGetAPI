import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaUserProvider {

  constructor(public http: Http) {
    console.log('Hello ListaUserProvider Provider');
  }

  buscarUser(username){
    return this.http.get("https://api.github.com/users/"+username)
    //return this.http.get("https://api.github.com/users/joseadilson")
  }

}

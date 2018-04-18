import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

/*
  Generated class for the ListaReposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaReposProvider {

  constructor(public http: Http) {
    console.log('Hello ListaReposProvider Provider');
  }

  buscaListaRepos(username) {
    return this.http.get("https://api.github.com/users/"+username+"/repos")
    //return this.http.get("https://api.github.com/users/joseadilson/repos")
  }
}

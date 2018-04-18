import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaReposProvider } from '../../providers/lista-repos/lista-repos';
import { ListaUserProvider } from '../../providers/lista-user/lista-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string = "";
  lista
  lista_user
  constructor(public navCtrl: NavController,
    private listaRepos:ListaReposProvider,
    private listaUser: ListaUserProvider) {
  }

  carregaUser() {
    this.listaUser.buscarUser(this.username).subscribe(result => {
      this.lista_user = result.json();
      this.lista_user = Array.of(this.lista_user)
    });

  }

  carregaLista(){
    this.listaRepos.buscaListaRepos(this.username).subscribe(result => {
      this.lista = JSON.parse(result['_body']);
    });

    this.carregaUser()
  }

}

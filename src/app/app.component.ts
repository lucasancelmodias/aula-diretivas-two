import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lembretes:Array<string> = [];
  lista:Array<string> = ['Teste'];
  lembrete:string = '';
  variavelSombra:string = '10px 10px yellow';

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
  }
}

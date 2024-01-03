import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService){
    /*Esse parâmetro no construtor, é pra facilitar o código, é o mesmo que declarrar o atributo da classe e depois colocar a variável passada
    dentro do construtor recebendo a variável passada no ArgumentOutOfRangeError.
    */
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();
    //Ao invés de instanciar a classe, a gente usa a injeção de dependencias.

    this.cursos = this.cursosService.getCursos();
  }
  ngOnInit(){

  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'
import { CursosModule } from "./cursos/cursos.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, MeuPrimeiroComponent, MeuPrimeiro2Component, CursosModule]
})
export class AppComponent {
  title = 'Graziele';
}

import { Component } from "@angular/core";

@Component({
    selector: 'meu-primeiro-component',
    template: `
    <p>Meu primeiro component com Angular 2!</p>
    `,
    standalone: true,
    imports: []
})
export class MeuPrimeiroComponent {}
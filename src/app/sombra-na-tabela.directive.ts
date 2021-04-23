import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraNoComponente'
})
export class SombraNaTabelaDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @Input('appSombraNaTabela') sombraEntrada:string | undefined;
  @HostBinding('style.boxShadow')sombra: string | undefined;

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    this.sombra = this.sombraEntrada;
  }
  @HostListener('mouseleave') quandoOMouseSair() {
    this.sombra = '';

    
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' //Seletor da diretiva
})
export class RedDirective {

  constructor(private el: ElementRef) { //Injeção de dependência
    el.nativeElement.style.color = '#e35e6b';
  }

}

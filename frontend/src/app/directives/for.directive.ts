import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('MyForEm') numbers:number[]

  constructor() {
    
   }

   ngOnInit(): void {
    console.log(this.numbers)
   }

}

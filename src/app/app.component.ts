import {Component, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";

@Component({
  selector: 'app-root',
  imports: [
    Button
  ],
  template: `
    <h2>Zoneless Sample Code</h2>
    <p-button label="increment" (onClick)="onClickIncrement()"></p-button>
    
    <p>not signal val: {{ val }}</p>
    <p>signal val: {{signalVal() }}</p>
  `
})
export class AppComponent {

  val:number = 0;

  signalVal:WritableSignal<number> = signal<number>(0);

  onClickIncrement = ():void => {
    this.val = this.val+1

    this.signalVal.update((v) => v+1)
  }

}

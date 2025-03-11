import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {Button} from "primeng/button";

@Component({
  selector: 'app-root',
  imports: [
    Button
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl:'./app.component.html'
})
export class AppComponent {

  val:number = 0;

  signalVal:WritableSignal<number> = signal<number>(0);

  increment = ():void => {
    this.signalVal.update((v) => v+1)
  }

  notSignalIncrement = ():void => {
    this.val = this.val+1
  }

  constructor() {
    setInterval(() => {
      this.increment();
      this.notSignalIncrement();

      console.log('ok');
    },1000)
  }
}

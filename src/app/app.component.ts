import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {Button} from "primeng/button";
import {DialogService} from "primeng/dynamicdialog";
import {CounterComponent} from "./counter.component";

@Component({
  selector: 'app-root',
  imports: [
    Button
  ],
  providers:[DialogService],
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Zoneless Sample Code</h2>
    <p-button label="signal increment" (onClick)="increment()"></p-button>

    <p>signal val: {{signalVal() }}</p>

    <!-- <p-button label="not signal increment" (onClick)="notSignalIncrement()"></p-button> -->
    
    <!-- <p>not signal val: {{ val }}</p> -->
    
    <p-button label="open dialog" (onClick)="openDialog()"></p-button>
  `
})
export class AppComponent {

  private readonly dialogService = inject(DialogService);

  val:number = 0;

  signalVal:WritableSignal<number> = signal<number>(0);

  increment = ():void => {
    this.signalVal.update((v) => v+1)
  }

  notSignalIncrement = ():void => {
    this.val = this.val+1
  }

  openDialog = ():void => {
    this.dialogService.open(CounterComponent,{
      focusOnShow:false,
      modal:true,
      data: {
        title:'Counter'
      }
    })
  }

  constructor() {
    setInterval(() => {
      this.increment();
      this.notSignalIncrement();

      console.log('ok');
    },1000)
  }
}

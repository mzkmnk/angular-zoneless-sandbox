import {Component, inject} from "@angular/core";
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector:'app-counter',
  template:`
    <div>{{title}}</div>
  `
})
export class CounterComponent {
  title:string;

  private readonly dynamicDialogConfig = inject(DynamicDialogConfig);

  constructor() {
    console.log(this.dynamicDialogConfig.data);
    this.title = this.dynamicDialogConfig.data.title;
  }

}
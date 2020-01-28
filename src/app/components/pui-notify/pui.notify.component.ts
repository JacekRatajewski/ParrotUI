import { Component, OnInit } from '@angular/core';
import { PuiNotifyService } from './pui.notify.service';
import { PuiNotifyClosingActions } from './pui.models';

@Component({
  selector: 'app-pui-notify',
  templateUrl: './pui.notify.component.html'
})
export class PuiNotifyComponent implements OnInit {

  constructor(private notify: PuiNotifyService) { }

  ngOnInit() {

  }

  show() {
    this.notify.notify("Default");
    this.notify.notify("Default", { background: "black", color: "white", closing: PuiNotifyClosingActions.OnAction, w: 230, h: 20 });
  }

  info() {
    this.notify.info("Info");
  }

  error() {
    this.notify.error("Error");
  }

  succ() {
    this.notify.success("Success");
  }

  warn() {
    this.notify.warning("Warning");
  }

}

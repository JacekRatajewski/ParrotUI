import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { PuiNotifyComponent } from './components/pui-notify/pui.notify.component';
import { PuiBadgeComponent } from './components/pui-badge/pui-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    PuiNotifyComponent,
    PuiBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

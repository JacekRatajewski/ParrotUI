import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components.routing';
import { PuiNotifyComponent } from './pui-notify/pui.notify.component';
import { PuiNotifyService } from './pui-notify/pui.notify.service';

@NgModule({
    declarations:
        [
            PuiNotifyComponent
        ],
    imports:
        [
            CommonModule,
            ComponentsRoutingModule
        ],
    exports: [],
    providers: 
    [
        PuiNotifyService
    ],
})
export class ComponentsModule { }
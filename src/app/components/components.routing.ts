import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PuiNotifyComponent } from './pui-notify/pui.notify.component';

const routes: Routes = [
    {
        path: '',
        component: PuiNotifyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}

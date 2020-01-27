import { Injectable } from '@angular/core';
import { PuiNotifyConfig, PuiNotifyResult, PuiBuilderConfig } from './pui.models';
import { Observable } from 'rxjs';

@Injectable()
export class PuiNotifyService {
    private builderConfig: PuiBuilderConfig = {};
    private get builder() {
        let el = document.createElement('div');
        el.classList.add('pui-notify');
        return el;
    }
    notify(config?: PuiNotifyConfig, message?: string): Observable<PuiNotifyResult> {
        return;
    }
}
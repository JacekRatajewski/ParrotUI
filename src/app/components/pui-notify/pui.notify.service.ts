import { Injectable } from '@angular/core';
import { PuiNotifyConfig, PuiNotifyResult, PuiNotifyClosingActions } from './pui.models';
import { of, Subject, Subscription } from 'rxjs';

@Injectable()
export class PuiNotifyService {

    constructor() {
        const overlay = document.createElement('div');
        overlay.classList.add('pui-overlay');
        if (document.querySelector('.pui-overlay') == null) {
            document.querySelector('body').append(overlay);
            this.overlay = overlay;
        }
        this.onExitSub$ = this.onExit$.subscribe(res => {
            if (!res.closed) {
                this.overlay.classList.add('show');
            } else {
                this.overlay.classList.remove('show');
            }
        })
    }
    ngOnDestroy(): void {
        this.onExitSub$.unsubscribe();
    }
    private overlay: HTMLDivElement;
    private builderConfig: PuiNotifyConfig;
    private onExit$ = new Subject<{ closed: boolean }>();
    private onExitSub$: Subscription;
    private get defaultConfig() {
        const config: PuiNotifyConfig =
        {
            color: '#000000',
            background: '#f5f5f5',
            w: 230,
            h: 20,
            closing: PuiNotifyClosingActions.Default
        }
        return config;
    }
    private get builder() {
        const el = document.createElement('div');
        el.classList.add('pui-notify');
        el.style.minWidth = this.builderConfig.w + 'px';
        el.style.maxWidth = 'fit-content';
        el.style.height = this.builderConfig.h + 'px';
        el.style.color = this.builderConfig.color;
        el.style.backgroundColor = this.builderConfig.background;
        if (this.builderConfig.icon != null) {
            const icon = document.createElement('i');
        }
        if (this.builderConfig.closing == PuiNotifyClosingActions.OnAction) {
            const closeButton = document.createElement('button');
            el.append(closeButton);
        }
        return el;
    }

    notify(message: string, config?: PuiNotifyConfig): PuiNotifyResult {
        this.builderConfig = config != null ? config : this.defaultConfig;
        const notifyEl = this.builder;
        notifyEl.innerText = message;

        const result = new PuiNotifyResult();
        result.el = notifyEl;
        result.data = { message: message };
        result.onOpen = of(this.OnOpen(notifyEl, this.builderConfig.closing));
        result.onExit = this.onExit$.asObservable();
        if (this.builderConfig.closing == PuiNotifyClosingActions.OnAction) {
            result.onAction = of(this.OnClosed(notifyEl));
        }
        return result;
    }

    success(message: string): PuiNotifyResult {
        const config = this.defaultConfig;
        config.background = '#3cc864';
        config.color = '#fffffff';
        return this.notify(message, config);
    }

    error(message: string): PuiNotifyResult {
        const config = this.defaultConfig;
        config.background = '#c83c3c';
        config.color = '#fffffff';
        return this.notify(message, config);
    }

    info(message: string): PuiNotifyResult {
        const config = this.defaultConfig;
        config.background = '#3c82c8';
        config.color = '#fffffff';
        return this.notify(message, config);
    }

    warning(message: string): PuiNotifyResult {
        const config = this.defaultConfig;
        config.background = '#c8c83c';
        config.color = '#fffffff';
        return this.notify(message, config);
    }

    private OnClosed(el: HTMLDivElement) {
        this.onExit$.next({ closed: true });
        this.overlay.removeChild(el);
    }

    private OnOpen(el: HTMLDivElement, closing: PuiNotifyClosingActions) {
        this.overlay.append(el);
        this.onExit$.next({ closed: false });
        if (closing == PuiNotifyClosingActions.Default) {
            setTimeout(() => {
                el.classList.add('animate');
                this.OnClosed(el);
            }, 1401)
        }
    }
}
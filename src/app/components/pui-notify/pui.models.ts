import { Observable } from 'rxjs';

export enum PuiDefaultMessages {
    GetSucces = "Downloaded.",
    SaveSuccess = "Saved.",
    InsertSuccess = "Added.",
    DeleteSuccess = "Deleted.",
    UpdateSuccess = "Updated."
}

export enum PuiNotifyClosingActions {
    Default = -1,
    OnAction = 1
}

export interface PuiNotifyConfig {
    w: number;
    h: number;
    color: string;
    background: string;
    closing: PuiNotifyClosingActions,
    icon?: string;
    position?: string;
}

export class PuiNotifyResult {
    data: { message: string }
    el: HTMLDivElement;
    onExit?: Observable<any>;
    onOpen?: Observable<void>;
    onAction?: Observable<void>;
}
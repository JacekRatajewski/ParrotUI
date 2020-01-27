import { Observable } from 'rxjs';

export enum PuiDefaultMessages {
    GetSucces,
    SaveSuccess,
    InsertSuccess,
    DeleteSuccess,
    UpdateSuccess
}


export interface PuiNotifyConfig {
    w: number;
    h: number;
    color: string;
    background: string;
    icon: string;
}

export interface PuiBuilderConfig {
    
}

export class PuiNotifyResult {
    onExit: Observable<any>;

}
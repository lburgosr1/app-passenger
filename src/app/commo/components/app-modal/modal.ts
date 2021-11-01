export interface IModalCustomMessage {
    title: string;
    body: string;
    buttonTextConfirmation: string;
    buttonTextCancel: string;
    showButtonTextCancel: boolean;
    showButtonTextConfirmation: boolean;
}

export class Modal implements IModalCustomMessage {
    title: string;
    body: string;
    buttonTextConfirmation: string;
    buttonTextCancel: string;
    buttonSubmit: string;
    showButtonTextCancel: boolean;
    showButtonTextConfirmation: boolean;

    constructor(title?: string, body?: string, showButtonCancel: boolean = true, showButtonConfirmation: boolean = true) {
        this.title = title ? title : '';
        this.body = body ? body : '';
        this.buttonTextConfirmation = 'Accept';
        this.buttonTextCancel = 'Cancel';
        this.buttonSubmit = 'Submit';
        this.showButtonTextCancel = showButtonCancel;
        this.showButtonTextConfirmation = showButtonConfirmation;
    }
}
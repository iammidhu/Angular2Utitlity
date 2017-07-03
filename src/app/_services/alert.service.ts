import { MdlSnackbarService } from "@angular-mdl/core";
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
    constructor(private mdlSnackbarService: MdlSnackbarService) { }

    alertMe(message: string) {
        this.mdlSnackbarService.showSnackbar({
            message: message,
            timeout: 200,
            action: {
                handler: () => {

                },
                text: 'Close'
            }
        });
    }
}

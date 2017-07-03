import { MdlSnackbarService } from "@angular-mdl/core";
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
    constructor(private mdlSnackbarService: MdlSnackbarService) { }

    toastMe(message: string) {
        this.mdlSnackbarService.showSnackbar({
            message: message,
        });
    }
}

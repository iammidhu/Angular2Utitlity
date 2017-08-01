import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {

    // Observable navItem source
    private _navItemSource = new BehaviorSubject<number>(0);
    // Observable navItem stream
    navItem$ = this._navItemSource.asObservable();
    // service command
    changeNav(num: number) {
        this._navItemSource.next(num);
    }
}

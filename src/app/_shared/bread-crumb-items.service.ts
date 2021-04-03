

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';


@Injectable()


export class BreadCrumbItemsService {

    private menuItemObs$: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);

    constructor() { }

    getMenuItemObs(): Observable<MenuItem[]> {
        return this.menuItemObs$.asObservable();
    }
    setMenuItemObs(menuItem: MenuItem[]){
        this.menuItemObs$.next(menuItem);
    }
}
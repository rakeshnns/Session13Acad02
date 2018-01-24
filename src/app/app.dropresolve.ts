import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Degreelist } from './app.select.service';


@Injectable()
export class DegreetypeResolveService implements Resolve<any> {

  constructor(private _Degreelist: Degreelist) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('resolver');
    return this._Degreelist.getTitle();
    /*return 'Others';*/
  }
}

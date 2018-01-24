
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DialogService {
  confirm(message?: string): Observable<boolean> {
    /* conformation will be false if cancel is clicked and true if ok is clicked */
    const confirmation = window.confirm(`${message} Are you sure?`);
    console.log(confirmation);
    console.log(Observable.of(confirmation));
    return Observable.of(confirmation);
  }
}

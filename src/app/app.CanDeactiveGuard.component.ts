/*CanDeactivate interface is a route guard to decide if a route can deactivated.*/


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppAddComponent } from './app.addview.component';
import { DialogService } from './app.dialouge.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AppAddComponent> {

    constructor(private dialogService: DialogService) { }

  canDeactivate(
    component: AppAddComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

      let url: string = state.url;
      console.log('Url: ' + url);

      if (!component.isUpdating && component.myForm.dirty) {
        component.isUpdating = false;
        return this.dialogService.confirm('Discard changes for Add employee -');
      }
      return true;
  }
}

import { Routes } from '@angular/router';
import { CanActivateGuard } from './app.CanActiveGuard.component';
import { CanDeactivateGuard } from './app.CanDeactiveGuard.component';
import { AppAddComponent, AppViewComponent, AppPageNotFoundComponent, AppViewpassComponent } from './app.addview.component';
import { AppLoginComponent } from './app.addview.component';
import { DegreetypeResolveService } from './app.dropresolve';

export const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },    /*Default route*/
  { path: 'login', component: AppLoginComponent },
  /* add rout has CanActivate,CanDeactivate,resolve gaurds*/
  { path: 'add', component: AppAddComponent, canActivate: [CanActivateGuard],
         canDeactivate: [CanDeactivateGuard], resolve: { EMPDeg : DegreetypeResolveService } },
  /* view rout has CanActivate gaurds*/
  { path: 'view', component: AppViewComponent, canActivate: [CanActivateGuard] },
  { path: 'Eview/:PassName', component: AppViewpassComponent, canActivate: [CanActivateGuard]}, /* Route with parameter */
  { path: '**', component: AppPageNotFoundComponent, canActivate: [CanActivateGuard] }       /*Wildcard route*/
];

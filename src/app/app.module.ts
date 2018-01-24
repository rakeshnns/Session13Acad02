import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';     /*Reactive form Module import*/
import { FormsModule } from '@angular/forms';             /*Reactive form Module import*/
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';
import { FirstCHARCAPS } from './app.custom.pipe';        /*Custom Pipe for Capitalising First character*/
import { FilterPIPE } from './app.custompipe.search';     /*Custom Pipe for search*/
import { RouterModule } from '@angular/router';           /* Ruter Module */
import { routes } from './app.routes';                    /*Routes */
import { AppAddComponent, AppViewComponent, AppPageNotFoundComponent, AppViewpassComponent } from './app.addview.component';
import { AppLoginComponent } from './app.addview.component';
import { CanActivateGuard } from './app.CanActiveGuard.component';
import { CanDeactivateGuard } from './app.CanDeactiveGuard.component';
import { DialogService } from './app.dialouge.service';
import { DegreetypeResolveService } from './app.dropresolve';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    FirstCHARCAPS,                                      /*Custome pipe declaration. */
    FilterPIPE,                                         /*Custome pipe declaration. */
    AppLoginComponent,
    AppAddComponent,
    AppViewComponent,
    AppPageNotFoundComponent,
    AppViewpassComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)                        /*Fetching Routes */
  ],
  providers: [EmployeeMember, Degreelist, CanActivateGuard, DialogService, CanDeactivateGuard, DegreetypeResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

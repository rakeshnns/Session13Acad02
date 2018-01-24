/*custom validators, as they are nothing more than regular functions.
You could create the function for your custom validator inside your
component file directly if the validator won’t be used elsewhere,
but here we’ll assume re-use and create a validator in a separate file.*/

import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

export function ValidateDep(Departre: RegExp): ValidatorFn {

  /* If allowed value i.e Department field vale matches Regex decalared then
     returnvalue will be null and ifnotmatching then error  value will be
     notallowed */
   return (control: AbstractControl): {[key: string]: any} => {
     const allowed = Departre.test(control.value);
     return allowed ? null : {'notAllowed': {value: control.value}};
   };

}

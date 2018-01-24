import { Injectable } from '@angular/core';
/*import { Member } from './app.member';*/
/*import { MEMBERS } from './app.member.data';*/
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Injectable()
/*Service*/
export class EmployeeMember {
     MyEmpMembers: FormGroup[] = [];

     /* get function*/
     getEmpFunction(): FormGroup[] {
         return this.MyEmpMembers;
     }
     /* add function */
     addEmpFunction(MyEmpMempass: FormGroup) {
      /*  adding elements using unshift */
      this.MyEmpMembers.unshift(MyEmpMempass);

     }
}

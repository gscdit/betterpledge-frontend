import { Input, Directive } from "@angular/core";
import { NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({
    selector:'[confirmPassword]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ConfirmPassword,
        multi:true
    }]

})
export class ConfirmPassword{
    @Input() confirmPassword:string;
    validate(control:AbstractControl):{[key:string]:any}|null{         //Control is Confirm Password
       const controlToCompare=control.parent.get(this.confirmPassword);   //Password
       if(controlToCompare && controlToCompare.value!==control.value){
           return {'notEqual':true}
       }
       return null;
    }
}
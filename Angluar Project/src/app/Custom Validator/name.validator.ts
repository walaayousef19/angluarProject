import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validate(forbiddenName:RegExp):ValidatorFn{
    return(control:AbstractControl)=>{
        const forbidden=forbiddenName.test(control.value);
        return forbidden? {"forbiddenName":{value:control.value}}: null;
    }
}
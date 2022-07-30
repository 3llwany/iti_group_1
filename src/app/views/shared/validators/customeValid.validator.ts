import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export class CustomeValidator {
  static whiteSpace(control: AbstractControl): ValidationErrors | null {
    if (((control.value as string) || '').trim().length === 0) {
      return { whiteSpace: true };
    }
    return null;
  }

  static noSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { noSpace: true };
    }
    return null;
  }
  
   static startsWith(control: AbstractControl): ValidationErrors | null {
    if (!control.value.startsWith("01")) {
      return { startsWith: true };
    }
    return null;
  }
}

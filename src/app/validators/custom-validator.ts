import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

    // check if the name is not only whitespace
    static notOnlyWhitespace(control: AbstractControl): ValidationErrors | null {
        // check if string contains only whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {
            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        } else {
            // valid, return null
            return null;
        }
    }
}

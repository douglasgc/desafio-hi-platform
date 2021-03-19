import { FormGroup } from '@angular/forms';

export const cascadingFormGroup = (value: boolean, formGroup: FormGroup, ) => {
    Object.keys(formGroup.controls)
        .map((key) => formGroup.get(key))
        .forEach((control) => {
            control.get('value').setValue(value);
        });
};

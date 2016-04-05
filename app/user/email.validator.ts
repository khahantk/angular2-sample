import {provide, Directive, forwardRef} from 'angular2/core';
import {Control, NG_VALIDATORS} from 'angular2/common';

@Directive({
    selector: '[validateEmail]',
    providers: [
        provide(NG_VALIDATORS, {
            useValue: EmailValidator.validateEmail,
            multi: true
        })
    ]
})
export class EmailValidator {
    static validateEmail(c: Control) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
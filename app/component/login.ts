import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from "angular2/angular2"
import {RouterLink} from 'angular2/router';

@Component({
    selector:"login",
    templateUrl:'/app/template/login.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})

export class LoginComponent{
    login: ControlGroup;

    constructor(fb: FormBuilder) {
        this.login = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    onSubmit(value) {
        console.log('you submitted value: ', value);
    }
}
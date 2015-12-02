import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Control,ControlGroup,ControlArray,Validators} from "angular2/angular2"
import {RouterLink} from 'angular2/router';

@Component({
    selector:"login",
    templateUrl:'/app/template/login.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})

export class LoginComponent{
    email = new Control("",Validators.required)
    password = new Control("",Validators.required)

    onSubmit(value) {
        console.log('you submitted value: ', value);
    }
}
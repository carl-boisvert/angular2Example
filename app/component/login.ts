import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from "angular2/angular2"
import {RouterLink} from 'angular2/router';
import {ServerService} from '../model/server/server';

@Component({
    selector:"login",
    templateUrl:'/app/template/login.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})

export class LoginComponent{
    login: ControlGroup;
    server: ServerService

    constructor(fb: FormBuilder, server: ServerService) {
        this.login = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        this.server = server;
    }

    onSubmit(value) {
        if(this.login.valid){
            this.server.login(value["email"],value["password"]);
        }
    }
}
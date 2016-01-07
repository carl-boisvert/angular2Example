import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/angular2';
import {ServerService} from '../model/server/server';

@Component({
    selector: 'contact',
    templateUrl:'/app/template/contact.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class ContactComponent{
    server: ServerService;
    contact: ControlGroup;

    constructor(fb: FormBuilder, server: ServerService) {
        this.contact = fb.group({
            email: ["", Validators.required],
            message: ["", Validators.required]
        });
        this.server = server;
    }

    public sendMessage(value){
        console.log(value);
        if(this.contact.valid){
            var observable = this.server.sendEmailContact(value["email"],value["message"]);
            observable.subscribe(response=>{
                console.log(response);
            });
        }
    }
}
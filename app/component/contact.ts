import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'contact',
    templateUrl:'/app/template/contact.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class ContactComponent{
    public name : String;
    public id: number;
}
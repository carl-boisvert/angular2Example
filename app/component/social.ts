import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Input} from 'angular2/angular2';

@Component({
    selector: 'social',
    templateUrl:'/app/template/social.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class SocialComponent{
    @Input() urls: Object;

    constructor(){

    }
}
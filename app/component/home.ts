import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { Player } from "../model/player";
import {SearchPlayerComponent} from "./searchPlayer"

@Component({
    selector: 'navigation',
    templateUrl:'/app/template/home.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,SearchPlayerComponent]
})

export class HomeComponent{
    public organisation : "Critical Assets";
}
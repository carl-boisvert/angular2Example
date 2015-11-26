import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { Player } from "../model/player";
import {SearchPlayerComponent} from "./searchPlayer"
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';

@Component({
    selector: 'navigation',
    templateUrl:'/app/template/nav.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,SearchPlayerComponent,RouterLink]
})

export class NavComponent{
    public name : String;
    public id: number;
}
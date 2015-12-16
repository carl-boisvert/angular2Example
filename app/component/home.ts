import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { Player } from "../model/player";
import { TeamsComponent } from "./teams";
import {SearchPlayerComponent} from "./searchPlayer"
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';

@Component({
    selector: 'navigation',
    templateUrl:'/app/template/home.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,SearchPlayerComponent, RouterLink, TeamsComponent]
})

export class HomeComponent{
    public organisation : string = "Critical Assets";
}
import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";

@Component({
    selector: 'team',
    templateUrl:'/app/template/team.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})


export class TeamComponent{
    public team = new Team("Critical Assets");
    public player: Player;
}
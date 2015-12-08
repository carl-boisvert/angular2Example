import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink, RouteParams} from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";
import {ServerService} from '../model/server/server';

@Component({
    selector: 'teams',
    templateUrl:'/app/template/teams.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})


export class TeamsComponent{
    teams: Array<Team>;
    constructor(server: ServerService){
        var observer = server.getTeams();
        observer.subscribe(response => {
            this.teams = response.teams;
        })
    }
}
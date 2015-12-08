import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink, RouteParams} from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";
import {ServerService} from "../model/server/server"

@Component({
    selector: 'team',
    templateUrl:'/app/template/team.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
})


export class TeamComponent{
    public team: Team;
    public id: number
    recruiting: Boolean = false;
    public constructor(params: RouteParams,server: ServerService){
        var observable = server.getTeam(params.get('id'));
        observable.subscribe(response=>{
            this.team = response.team
        });
    }
}
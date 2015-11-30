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
    public player: Player[];
    public id: number
    recruiting: Boolean = false;
    public constructor(params: RouteParams,server: ServerService){
        console.log(params.get('id'));
        console.log(server);
        if(params.get('id') == 1){
            this.team = new Team("CLAS-1", server);
        } else if(params.get('id') == 2){
            this.team = new Team("CLAS-2", server);
        }
        if(this.team.players.length < 4){
            this.recruiting = true;
        }
    }
}
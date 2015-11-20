import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouteParams } from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";

@Component({
    selector: 'player',
    templateUrl:'/app/template/player.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class PlayerComponent{
    public name : String;
    public id: number;
    public constructor(params: RouteParams){
        console.log(params.get('id'));
        var team = new Team("Critical Assets");
        for(var i=0; i<team.players.length; i++){
            if(team.players[i].number == params.get('id')){
                console.log("FOUND");
                this.name = team.players[i].name;
                this.id = team.players[i].number;
            }
        }
    }
}
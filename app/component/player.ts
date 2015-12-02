import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouteParams } from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";
import { SocialComponent } from "./social";
import { StreamComponent } from "./stream";
import {ServerService} from '../model/server/server';

@Component({
    selector: 'player',
    templateUrl:'/app/template/player.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES, SocialComponent, StreamComponent]
})

export class PlayerComponent{
    @Input() playerId: string;
    public name : String;
    public id: number;
    public constructor(params: RouteParams, server: ServerService){
        var observable = server.getPlayer();
        observable.subscribe(players => {
            for(var i=0; i<players[params.get("teamId")].length; i++){
                if(players[params.get("teamId")][i].number == parseInt(params.get('id'))){
                    this.name = players[params.get("teamId")][i].name;
                    this.id = players[params.get("teamId")][i].number;
                }
            }
        });
    }
}
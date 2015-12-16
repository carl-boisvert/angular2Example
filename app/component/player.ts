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
    public gamertag : String;
    public number: number;
    public id: number;
    public social: Object;
    public loaded: Boolean = false;

    public constructor(params: RouteParams, server: ServerService){
        var observable = server.getPlayer(params.get('id'));
        observable.subscribe(response => {
            this.gamertag = response.player.gamertag;
            this.number = response.player.number;
            this.id = response.player.id;
            this.social = {
                facebook: response.player.facebook,
                twitter: response.player.twitter,
                youtube: response.player.youtube,
                twitch: response.player.twitch
            };
            console.dir(this.social);
            this.loaded = true;
        });
    }
}
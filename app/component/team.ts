import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';
import { Team } from "../model/team";
import { Player } from "../model/player";

@Component({
    selector: 'team',
    templateUrl:'/app/template/team.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES,RouterLink],
    styles:[`
  .players {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .players li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .players li:hover {color: #369; background-color: #EEE; left: .2em;}
  .players .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
  `],
})

export class TeamComponent{
    public team = new Team("Critical Assets");
    public player: Player;
}
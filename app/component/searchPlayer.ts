import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import { Team } from "../model/team";

@Component({
    selector: 'search-player',
    templateUrl:'/app/template/search-player.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})

export class SearchPlayerComponent{
    public name : String;
    public id: number;
}
import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
    selector: 'contact',
    templateUrl:'/app/template/contact.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class Server{
    private http: Http;
    private players;
    public constructor(http: Http){
        this.http = http;
    }

    public getPlayer(){
        var players = this.http.get("http://test.local/test.json").map(res => res.json()).subscribe(players => this.players = players);
        console.log(players);
    }
}
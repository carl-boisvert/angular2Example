import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Injectable()

export class ServerService{
    private http: Http;
    private players;
    public constructor(http: Http){
        this.http = http;
        console.log(http);
    }

    public getPlayer(){
        var players = this.http.get("http://test.local/test.json").map(res => res.json()).subscribe(players => this.players = players);
        console.log("PLAYERS");
        return this.players;
    }
}
import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Injectable()

export class ServerService{
    private baseUrl = "http://esportmontreal.local"
    private http: Http;
    private return;
    public constructor(http: Http){
        this.http = http;
    }

    public login(email,password){
        console.log(email);
    }

    public getPlayer(){
        return this.http.get("http://test.local/test.json").map(res => res.json());
    }
}
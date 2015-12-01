import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Injectable} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Injectable()

export class ServerService{
    private http: Http;
    private return;
    public constructor(http: Http){
        this.http = http;
    }

    public getPlayer(){
        var observer =  this.http.get("http://test.local/test.json").map(res => res.json());
        return observer.toPromise();
    }
}
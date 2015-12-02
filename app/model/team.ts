import {Player} from "./player"
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {ServerService} from './server/server';

export class Team {
    id: number
    name: string;
    players: Array<Player>;
    constructor(name: string, server: ServerService){
        this.name = name;
        if(name=="CLAS-1"){
            this.id = 1;
            var observable = server.getPlayer();
            observable.subscribe(players => {this.players = players[this.id]});
        } else if(name=="CLAS-2"){
            this.id = 2;
            var observable = server.getPlayer();
            observable.subscribe(players => {this.players = players[this.id]});
        }
    }

    getPlayer(players){
       return this.players;
    }
}
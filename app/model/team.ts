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
            var promise = server.getPlayer();
            promise.then((result) => {return Promise.resolve(console.log(this.players = result[this.id]))});
        } else if(name=="CLAS-2"){
            this.id = 2;
            var promise = server.getPlayer();
            promise.then((result) => {return Promise.resolve(console.log(this.players = result[this.id]))});
        }
    }

    setPlayers(players){
        console.log(this.players);
        this.players = players.players;
    }

}
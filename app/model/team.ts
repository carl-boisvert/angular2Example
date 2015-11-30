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
            this.players = server.getPlayer(); /*[
                new Player(7,"Amnesiaguy"),
                new Player(13,"Pleonator"),
                new Player(15,"Chico"),
                new Player(17,"Raf")
            ];*/
        } else if(name=="CLAS-2"){
            this.id = 2;
            this.players =  [
                new Player(11,"Owlsome"),
                new Player(9,"Akaangel69"),
                new Player(18,"Akinzee")
            ];
        }
        console.log(server);
        server.getPlayer();
    }

}
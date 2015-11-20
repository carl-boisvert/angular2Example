import {Player} from "./player"

export class Team {
    name: string;
    players: Player;
    public constructor(name : String){
        this.name = name;
        this.players = [
            new Player(7,"Amnesiaguy"),
            new Player(13,"Pleonator"),
            new Player(15,"Chico"),
            new Player(17,"Akaangel")
        ]
    }
}
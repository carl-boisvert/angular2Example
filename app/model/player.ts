export class Player {
    number: number;
    name: string;
    public constructor(public number : number, name : String){
        this.number = number;
        this.name = name;
    }
    public screamName(){
        alert(this.name);
    }
}
import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Input} from 'angular2/angular2';

@Component({
    selector: 'stream',
    templateUrl:'/app/template/stream.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})


export class StreamComponent{
    @Input() streamUrl: string;

    public getSteamUrl(){
        return this.streamUrl;
    }
}
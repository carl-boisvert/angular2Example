import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES,bind} from 'angular2/angular2';
import {TeamComponent} from "./component/team"
import {HomeComponent} from "./component/home"
import {PlayerComponent} from "./component/player"
import {ContactComponent} from "./component/contact"
import { TeamsComponent } from "./component/teams";
import {NavComponent} from "./component/nav"
import { ROUTER_DIRECTIVES, RouteConfig,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Server} from './model/server/server';

@Component({
    selector: 'my-app',
    templateUrl:'/app/template/base.html',
    directives: [ROUTER_DIRECTIVES,NavComponent],
})
@RouteConfig([
    { path: '/',              as: 'Home',  component: HomeComponent },
    { path: '/contact',              as: 'Contact',  component: ContactComponent },
    { path: '/teams/',              as: 'Teams',  component: TeamsComponent },
    { path: '/team/:id',              as: 'Team',  component: TeamComponent },
    { path: '/player/:teamId/:id',              as: 'Player',  component: PlayerComponent }
])
class AppComponent {

}

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy),
    Server
]).then(
        success => console.log('AppComponent bootstrapped!'),
        error => console.log(error)
);

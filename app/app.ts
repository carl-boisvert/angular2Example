import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES,bind} from 'angular2/angular2';
import {TeamComponent} from "./component/team"
import {HomeComponent} from "./component/home"
import {PlayerComponent} from "./component/player"
import {NavComponent} from "./component/nav"
import { ROUTER_DIRECTIVES, RouteConfig,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    template:'<navigation></navigation><div class="container-fluid"><router-outlet></router-outlet></div>',
    directives: [ROUTER_DIRECTIVES,NavComponent],
})
@RouteConfig([
    { path: '/',              as: 'Home',  component: HomeComponent },
    { path: '/teams/',              as: 'Teams',  component: TeamComponent },
    { path: '/team/:id',              as: 'Team',  component: TeamComponent },
    { path: '/players/:id',              as: 'Player',  component: PlayerComponent }
])
class AppComponent {

}

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log('AppComponent bootstrapped!'),
        error => console.log(error)
);

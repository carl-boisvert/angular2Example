import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES,bind} from 'angular2/angular2';
import {TeamComponent} from "./component/team"
import {PlayerComponent} from "./component/player"
import { ROUTER_DIRECTIVES, RouteConfig,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

@Component({
    selector: 'my-app',
    template:'<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    { path: '/',              as: 'Team',  component: TeamComponent },
    { path: '/player/:id',              as: 'Player',  component: PlayerComponent }
])
class AppComponent {

}

bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log('AppComponent bootstrapped!'),
        error => console.log(error)
););
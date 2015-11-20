var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var team_1 = require("./component/team");
var player_1 = require("./component/player");
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Team', component: team_1.TeamComponent },
            { path: '/player/:id', as: 'Player', component: player_1.PlayerComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
;
//# sourceMappingURL=app.js.map
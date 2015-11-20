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
var router_1 = require('angular2/router');
var team_1 = require("../model/team");
var PlayerComponent = (function () {
    function PlayerComponent(params) {
        console.log(params.get('id'));
        var team = new team_1.Team("Critical Assets");
        for (var i = 0; i < team.players.length; i++) {
            if (team.players[i].number == params.get('id')) {
                console.log("FOUND");
                this.name = team.players[i].name;
                this.id = team.players[i].number;
            }
        }
    }
    PlayerComponent = __decorate([
        angular2_1.Component({
            selector: 'player',
            templateUrl: '/app/template/player.html',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], PlayerComponent);
    return PlayerComponent;
})();
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.js.map
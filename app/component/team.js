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
var TeamComponent = (function () {
    function TeamComponent() {
        this.team = new team_1.Team("Critical Assets");
    }
    TeamComponent = __decorate([
        angular2_1.Component({
            selector: 'team',
            templateUrl: '/app/template/team.html',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, router_1.RouterLink],
            styles: ["\n  .players {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .players li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .players li:hover {color: #369; background-color: #EEE; left: .2em;}\n  .players .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], TeamComponent);
    return TeamComponent;
})();
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.js.map
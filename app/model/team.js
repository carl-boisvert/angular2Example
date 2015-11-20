var player_1 = require("./player");
var Team = (function () {
    function Team(name) {
        this.name = name;
        this.players = [
            new player_1.Player(7, "Amnesiaguy"),
            new player_1.Player(13, "Pleonator"),
            new player_1.Player(15, "Chico"),
            new player_1.Player(17, "Akaangel")
        ];
    }
    return Team;
})();
exports.Team = Team;
//# sourceMappingURL=team.js.map
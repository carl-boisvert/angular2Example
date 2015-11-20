var Player = (function () {
    function Player(number, name) {
        this.number = number;
        this.number = number;
        this.name = name;
    }
    Player.prototype.screamName = function () {
        alert(this.name);
    };
    return Player;
})();
exports.Player = Player;
//# sourceMappingURL=player.js.map
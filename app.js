var Rx = require("rxjs/Rx");
var App = (function () {
    function App() {
    }
    App.prototype.start = function () {
        var empty = Rx.Observable.fromArray(["hello"]);
        var onetwothree = Rx.Observable.fromArray(["one", "two", "three"]);
        var stream = onetwothree.startWith("first")
            .subscribe(function (v) {
            console.log(v);
        });
    };
    return App;
})();
new App().start();
//# sourceMappingURL=app.js.map
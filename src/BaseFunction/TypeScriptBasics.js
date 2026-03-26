var TypeScriptBasics = /** @class */ (function () {
    function TypeScriptBasics() {
    }
    TypeScriptBasics.prototype.greet = function () {
        console.log("".concat(this.text));
    };
    return TypeScriptBasics;
}());
var t1 = new TypeScriptBasics();
t1.text = "Hello world";
t1.greet();

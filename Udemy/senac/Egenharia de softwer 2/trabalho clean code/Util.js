"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.randomizar = function (minimo, maximo) {
        var valorSorteado = minimo + Math.random() * (maximo - minimo);
        var valorInteiro = Math.round(valorSorteado);
        return valorInteiro;
    };
    return Util;
}());
exports.Util = Util;

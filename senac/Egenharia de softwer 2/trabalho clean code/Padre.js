"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priest = void 0;
var Personagem_1 = require("./Personagem");
var Util_1 = require("./Util");
var Priest = /** @class */ (function (_super) {
    __extends(Priest, _super);
    function Priest(nome) {
        var _this = _super.call(this, nome + " Priest", 0, 0, 0, 0, 0, 0, Util_1.Util.randomizar(1, 8000)) || this;
        _this._vidaAtual = _this._vidaMaxima;
        return _this;
    }
    Priest.prototype.atacar = function (oponente) {
        console.log("".concat(this._nome, " tentou converter ").concat(oponente.nome));
        this.ataque(oponente);
        oponente.contraAtacar(this);
    };
    Priest.prototype.contraAtacar = function (oponente) {
        console.log("".concat(this._nome, " tentou converter ").concat(oponente.nome));
        this.ataque(oponente);
    };
    Priest.prototype.aprimorarHabilidadePrincipal = function () {
        throw new Error("Este personagem não pode executar esta ação");
    };
    Priest.prototype.regenerarVida = function () {
        this._vidaAtual += this._vidaAtual * 1.5;
        if (this._vidaAtual > this._vidaMaxima) {
            this.vidaAtual = this._vidaMaxima;
        }
    };
    Priest.prototype.ataque = function (oponente) {
        var acertou = Util_1.Util.randomizar(0, 100) < 40;
        if (acertou) {
            throw new Error("".concat(oponente.nome, " foi convertido"));
        }
    };
    return Priest;
}(Personagem_1.Personagem));
exports.Priest = Priest;

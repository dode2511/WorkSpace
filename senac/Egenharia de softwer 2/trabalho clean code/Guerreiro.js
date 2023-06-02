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
exports.Guerreiro = void 0;
var Personagem_1 = require("./Personagem");
var Util_1 = require("./Util");
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome) {
        var _this = _super.call(this, nome + " Warrior", Util_1.Util.randomizar(1, 1000), 0, 0, Util_1.Util.randomizar(0, 50), Util_1.Util.randomizar(0, 90), 0, Util_1.Util.randomizar(1, 40000)) || this;
        _this._poderDeAtaque = _this._forca * 10;
        _this._vidaAtual = _this._vidaMaxima;
        return _this;
    }
    Guerreiro.prototype.atacar = function (oponente) {
        console.log("".concat(this._nome, " atacou ").concat(oponente.nome));
        this.ataque(oponente);
        oponente.contraAtacar(this);
    };
    Guerreiro.prototype.contraAtacar = function (oponente) {
        console.log("".concat(this._nome, " contra-atacou ").concat(oponente.nome));
        this.ataque(oponente);
    };
    Guerreiro.prototype.aprimorarHabilidadePrincipal = function () {
        this._forca *= this._forca * 1.1;
        this.atualizarPoderDeAtaque();
    };
    Guerreiro.prototype.atualizarPoderDeAtaque = function () {
        this._poderDeAtaque = this._forca * 10;
    };
    Guerreiro.prototype.regenerarVida = function () {
        this._vidaAtual += this._vidaAtual * 1.1;
        if (this._vidaAtual > this._vidaMaxima) {
            this.vidaAtual = this._vidaMaxima;
        }
    };
    Guerreiro.prototype.ataque = function (oponente) {
        var acertou = Util_1.Util.randomizar(0, 100) > oponente.esquiva;
        if (acertou) {
            var danoCausado = (1 - oponente.resistencia / 100) * this._poderDeAtaque;
            oponente.vidaAtual = oponente.vidaAtual - danoCausado;
            var oponenteMorreu = oponente.vidaAtual <= 0;
            if (oponenteMorreu) {
                throw new Error("".concat(oponente.nome, " foi derrotado."));
            }
        }
        else {
            console.log("".concat(oponente.nome, " esquivou o ataque de ").concat(this._nome));
        }
    };
    return Guerreiro;
}(Personagem_1.Personagem));
exports.Guerreiro = Guerreiro;

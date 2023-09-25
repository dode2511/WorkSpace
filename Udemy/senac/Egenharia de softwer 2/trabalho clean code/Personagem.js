"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(_nome, _forca, _habilidadeMental, _poderDeAtaque, _esquiva, _resistencia, _vidaAtual, _vidaMaxima) {
        this._nome = _nome;
        this._forca = _forca;
        this._habilidadeMental = _habilidadeMental;
        this._poderDeAtaque = _poderDeAtaque;
        this._esquiva = _esquiva;
        this._resistencia = _resistencia;
        this._vidaAtual = _vidaAtual;
        this._vidaMaxima = _vidaMaxima;
    }
    Personagem.prototype.salvar = function (objeTo) {
        throw new Error("Method not implemented.");
    };
    Personagem.prototype.remover = function (idObjeto) {
        throw new Error("Method not implemented.");
    };
    Personagem.prototype.listar = function () {
        throw new Error("Method not implemented.");
    };
    Personagem.prototype.atualizar = function (objeto) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Personagem.prototype, "esquiva", {
        get: function () {
            return this._esquiva;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vidaAtual", {
        get: function () {
            return this._vidaAtual;
        },
        set: function (vidaAtual) {
            this._vidaAtual = vidaAtual;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "poderDeAtaque", {
        get: function () {
            return this._poderDeAtaque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "resistencia", {
        get: function () {
            return this._resistencia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.resumo = function () {
        return "".concat(this._nome, ": ").concat(this._vidaAtual.toFixed(1), "/").concat(this._vidaMaxima);
    };
    return Personagem;
}());
exports.Personagem = Personagem;

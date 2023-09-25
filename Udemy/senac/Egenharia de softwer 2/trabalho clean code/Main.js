"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var Guerreiro_1 = require("./Guerreiro");
var Padre_1 = require("./Padre");
var Util_1 = require("./Util");
var teclado = (0, prompt_sync_1.default)();
function executarRound(personagens) {
    console.log("===== Personagens vivos (".concat(personagens.length, ") ====="));
    personagens.forEach(function (personagem) { return console.log(personagem.resumo()); });
    console.log("=============================\n");
    teclado("Tecle ENTER para rodar o próximo round\n");
    var atacantePosicao = Util_1.Util.randomizar(0, personagens.length - 1);
    var atacadoPosicao = Util_1.Util.randomizar(0, personagens.length - 1);
    if (atacantePosicao !== atacadoPosicao) {
        var atacante = personagens[atacantePosicao];
        var atacado = personagens[atacadoPosicao];
        atacante.atacar(atacado);
        console.log(atacante.resumo());
        console.log(atacado.resumo());
        console.log("\n");
        console.log(".".repeat(20));
    }
}
function removerPersonagensDerrotados(personagens) {
    return personagens.filter(function (personagem) { return personagem.vidaAtual > 0; });
}
function jogar() {
    var personagens = [];
    personagens.push(new Padre_1.Priest("Fábio de Melo"));
    personagens.push(new Guerreiro_1.Guerreiro("Ragnar"));
    personagens.push(new Padre_1.Priest("Quemedo"));
    personagens.push(new Guerreiro_1.Guerreiro("Genghis Khan"));
    personagens.push(new Guerreiro_1.Guerreiro("Alexandre, o Grande"));
    while (personagens.length > 1) {
        executarRound(personagens);
        personagens = removerPersonagensDerrotados(personagens);
    }
    console.log("O jogo acabou!");
    if (personagens.length === 1) {
        console.log("O vencedor \u00E9: ".concat(personagens[0].nome));
    }
    else {
        console.log("Não houve vencedor.");
    }
}
jogar();

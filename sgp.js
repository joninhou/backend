//SISTEMA DE GERENCIAMENTO DE PERSONAGENS

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase; 
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluída"; //=== igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas; 
};
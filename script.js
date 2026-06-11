// Lista de ações sustentáveis inspiradas no seu texto
const acoes = [
    "Economize água: feche a torneira enquanto escova os dentes e reduza o tempo no banho.",
    "Evite o desperdício de alimentos: consuma o necessário e apoie produtores locais conscientes.",
    "Plante uma árvore ou crie uma pequena horta em casa para valorizar a natureza.",
    "Apoie empresas e agricultores que utilizam práticas de cultivo sustentáveis e orgânicas.",
    "Ajude a proteger os cursos de água da sua região: nunca descarte lixo em rios ou nascentes."
];

// Seleção dos elementos da página
const botao = document.getElementById('action-btn');
const textoSugestao = document.getElementById('suggestion-text');

// Função para mostrar uma sugestão aleatória
botao.addEventListener('click', () => {
    // Escolhe um item aleatório da lista de ações
    const indiceAleatorio = Math.floor(Math.random() * acoes.length);
    const acaoSelecionada = acoes[indiceAleatorio];
    
    // Atualiza o texto e exibe na tela
    textoSugestao.textContent = acaoSelecionada;
    textoSugestao.classList.remove('hidden');
});
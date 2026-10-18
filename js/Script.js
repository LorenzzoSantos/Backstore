//parte dos níveis
const niveis = [
    {
        chave: "level-37",
        nome: "Level 37 - The Poolrooms",
        cor: "var(--level-agua)",
        descricao: "Piscinas sem fim, azulejos brancos e água morna. Calmo demais para ser seguro."
    },
    {
        chave: "level-run",
        nome: "Level ! - Run For Your Life",
        cor: "var(--level-run)",
        descricao: "Um corredor infinito com luzes vermelhas. Não pare de correr."
    },
    {
        chave: "level-fun",
        nome: "Level Fun =)",
        cor: "var(--level-fun)",
        descricao: "Uma festa que nunca acaba. Os Partygoers adoram visitas."
    },
    {
        chave: "level-1",
        nome: "Level 1 - Habitable Zone",
        cor: "var(--level-shady)",
        descricao: "Um galpão de concreto com caixas de suprimentos. O lugar mais seguro das Backrooms."
    },
    {
        chave: "level-4",
        nome: "Level 4 - Abandoned Office",
        cor: "var(--level-office)",
        descricao: "Um escritório vazio onde o expediente nunca termina."
    }
]

//parte do catálogo
const catalogoBackstore = [
    //Level 37
    {
        id: 1,
        nome: "Boia \"Sublimity\"",
        nivel: "level-37",
        preco: 49.90,
        estoque: 30,
        descricao: "Boia inflável para flutuar pelas piscinas infinitas.",
        imagem: "img/produtos/level-37/boia.svg",
        maisVendido: true
    },
    {
        id: 2,
        nome: "Toalha de azulejo branco",
        nivel: "level-37",
        preco: 59.90,
        estoque: 25,
        descricao: "Toalha com estampa dos azulejos do Level 37.",
        imagem: "img/produtos/level-37/toalha.svg",
        maisVendido: false
    },
    {
        id: 3,
        nome: "Chinelo Poolrooms",
        nivel: "level-37",
        preco: 34.90,
        estoque: 40,
        descricao: "Chinelo antiderrapante para os pisos molhados.",
        imagem: "img/produtos/level-37/chinelo.svg",
        maisVendido: false
    },
    {
        id: 4,
        nome: "Garrafa \"Água da Piscina Infinita\" 500ml",
        nivel: "level-37",
        preco: 12.90,
        estoque: 60,
        descricao: "Água engarrafada direto das piscinas. Não recomendamos beber.",
        imagem: "img/produtos/level-37/garrafa-agua.svg",
        maisVendido: false
    },
    {
        id: 5,
        nome: "Vela aromática \"Cloro & Eco\"",
        nivel: "level-37",
        preco: 29.90,
        estoque: 35,
        descricao: "Cheiro de piscina e de silêncio.",
        imagem: "img/produtos/level-37/vela.svg",
        maisVendido: false
    },
    {
        id: 6,
        nome: "Óculos de natação antiembaçante",
        nivel: "level-37",
        preco: 39.90,
        estoque: 28,
        descricao: "Para enxergar o fundo das piscinas que não têm fundo.",
        imagem: "img/produtos/level-37/oculos.svg",
        maisVendido: false
    },
    {
        id: 7,
        nome: "Patinho de borracha perdido",
        nivel: "level-37",
        preco: 14.90,
        estoque: 50,
        descricao: "Encontrado boiando sozinho em uma das piscinas.",
        imagem: "img/produtos/level-37/patinho.svg",
        maisVendido: false
    },
    {
        id: 8,
        nome: "Luminária de azulejo",
        nivel: "level-37",
        preco: 89.90,
        estoque: 15,
        descricao: "Luz azulada igual à dos corredores alagados.",
        imagem: "img/produtos/level-37/luminaria.svg",
        maisVendido: false
    },
    {
        id: 9,
        nome: "Camiseta \"Eu nadei no Level 37\"",
        nivel: "level-37",
        preco: 69.90,
        estoque: 45,
        descricao: "Para provar que você voltou.",
        imagem: "img/produtos/level-37/camiseta.svg",
        maisVendido: false
    },
    {
        id: 10,
        nome: "Quebra-cabeça \"Corredores Azulejados\"",
        nivel: "level-37",
        preco: 79.90,
        estoque: 20,
        descricao: "1000 peças, todas brancas e quase iguais.",
        imagem: "img/produtos/level-37/quebra-cabeca.svg",
        maisVendido: false
    },

    //Level !
    {
        id: 11,
        nome: "Tênis de corrida \"CORRE!\"",
        nivel: "level-run",
        preco: 249.90,
        estoque: 18,
        descricao: "Leve, rápido e confortável. Você vai precisar.",
        imagem: "img/produtos/level-run/tenis.svg",
        maisVendido: false
    },
    {
        id: 12,
        nome: "Placa de EXIT luminosa",
        nivel: "level-run",
        preco: 119.90,
        estoque: 22,
        descricao: "A única saída do Level !. Ou será que não?",
        imagem: "img/produtos/level-run/placa-exit.svg",
        maisVendido: true
    },
    {
        id: 13,
        nome: "Cronômetro de bolso",
        nivel: "level-run",
        preco: 44.90,
        estoque: 35,
        descricao: "Para saber quanto tempo você ainda aguenta correr.",
        imagem: "img/produtos/level-run/cronometro.svg",
        maisVendido: false
    },
    {
        id: 14,
        nome: "Garrafinha esportiva",
        nivel: "level-run",
        preco: 39.90,
        estoque: 40,
        descricao: "Hidratação sem precisar parar.",
        imagem: "img/produtos/level-run/garrafinha.svg",
        maisVendido: false
    },
    {
        id: 15,
        nome: "Moletom \"RUN FOR YOUR LIFE\"",
        nivel: "level-run",
        preco: 159.90,
        estoque: 25,
        descricao: "Moletom vermelho com o aviso mais importante do nível.",
        imagem: "img/produtos/level-run/moletom.svg",
        maisVendido: false
    },
    {
        id: 16,
        nome: "Faixa de cabeça antissuor",
        nivel: "level-run",
        preco: 19.90,
        estoque: 55,
        descricao: "Porque o suor não pode atrapalhar a fuga.",
        imagem: "img/produtos/level-run/faixa.svg",
        maisVendido: false
    },
    {
        id: 17,
        nome: "Lanterna de luz vermelha",
        nivel: "level-run",
        preco: 49.90,
        estoque: 30,
        descricao: "Pisca igual às luzes do corredor.",
        imagem: "img/produtos/level-run/lanterna.svg",
        maisVendido: false
    },
    {
        id: 18,
        nome: "Mochila de fuga ultraleve",
        nivel: "level-run",
        preco: 189.90,
        estoque: 12,
        descricao: "Cabe o essencial e não pesa nada.",
        imagem: "img/produtos/level-run/mochila.svg",
        maisVendido: false
    },
    {
        id: 19,
        nome: "Energético \"Último Fôlego\"",
        nivel: "level-run",
        preco: 9.90,
        estoque: 80,
        descricao: "Energia para mais alguns metros.",
        imagem: "img/produtos/level-run/energetico.svg",
        maisVendido: false
    },
    {
        id: 20,
        nome: "Medalha \"Sobrevivi ao Level !\"",
        nivel: "level-run",
        preco: 29.90,
        estoque: 40,
        descricao: "Poucos têm. Ainda menos merecem.",
        imagem: "img/produtos/level-run/medalha.svg",
        maisVendido: false
    },

    //Level Fun =)
    {
        id: 21,
        nome: "Pelúcia de Partygoer 30cm",
        nivel: "level-fun",
        preco: 99.90,
        estoque: 20,
        descricao: "Fofinha e sorridente. Sempre sorridente.",
        imagem: "img/produtos/level-fun/pelucia-partygoer.svg",
        maisVendido: true
    },
    {
        id: 22,
        nome: "Kit de balões =) (10 unidades)",
        nivel: "level-fun",
        preco: 24.90,
        estoque: 60,
        descricao: "Balões coloridos com o sorriso mais famoso das Backrooms.",
        imagem: "img/produtos/level-fun/baloes.svg",
        maisVendido: false
    },
    {
        id: 23,
        nome: "Chapéu de festa",
        nivel: "level-fun",
        preco: 14.90,
        estoque: 70,
        descricao: "Para você se misturar com os convidados.",
        imagem: "img/produtos/level-fun/chapeu.svg",
        maisVendido: false
    },
    {
        id: 24,
        nome: "Fatia de bolo de resina (NÃO COMA)",
        nivel: "level-fun",
        preco: 34.90,
        estoque: 30,
        descricao: "Parece delicioso. Por isso mesmo, não coma.",
        imagem: "img/produtos/level-fun/bolo.svg",
        maisVendido: false
    },
    {
        id: 25,
        nome: "Convite de festa amaldiçoado",
        nivel: "level-fun",
        preco: 9.90,
        estoque: 99,
        descricao: "Você foi convidado. Não dá para recusar.",
        imagem: "img/produtos/level-fun/convite.svg",
        maisVendido: false
    },
]

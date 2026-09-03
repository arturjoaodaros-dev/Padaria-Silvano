export const navegacao = [
  { rotulo: 'Início', href: '#inicio' },
  { rotulo: 'Produtos', href: '#produtos' },
  { rotulo: 'Sobre', href: '#sobre' },
  { rotulo: 'Contato', href: '#contato' },
]

export const produtos = [
  {
    id: 'pao-doce',
    nome: 'Pão Doce',
    imagem: '/SweetBread.jpg',
    largura: 896,
    altura: 1182,
    descricao: 'Quentinho e macio por dentro, com uma cobertura deliciosa.',
    detalhes:
      'Feito diariamente em nosso forno, com recheio generoso e uma camada crocante de açúcar por cima. Perfeito para acompanhar o café da manhã ou da tarde.',
  },
  {
    id: 'croissant-chocolate',
    nome: 'Croissant de Chocolate',
    imagem: '/ChocolateCroassaint.jpg',
    largura: 704,
    altura: 1526,
    descricao: 'Folhados amanteigados e crocantes, receita clássica francesa.',
    detalhes:
      'Camadas amanteigadas assadas até dourar, recheadas com chocolate e finalizadas com um toque de calda branca, chocolate e açúcar de confeiteiro.',
  },
  {
    id: 'salgados',
    nome: 'Salgados',
    imagem: '/Savory.jpg',
    largura: 704,
    altura: 1526,
    descricao: 'Uma das melhores e mais bonitas combinações da casa.',
    detalhes:
      'Esfihas, coxinhas e folhados assados na hora, prontos para matar a fome a qualquer momento do dia com muito sabor e crocância.',
  },
  {
    id: 'doces-bolos',
    nome: 'Doces Variados',
    imagem: '/Sweet.jpg',
    largura: 704,
    altura: 1526,
    descricao: 'Bolos de pote, fatias recheadas e muito mais.',
    detalhes:
      'Uma seleção de doces com recheios variados, sempre fresquinhos, para adoçar o seu dia ou fechar com chave de ouro qualquer refeição.',
  },
  {
    id: 'bolos-encomendas',
    nome: 'Bolos e Encomendas',
    imagem: '/Cake.jpg',
    largura: 1365,
    altura: 768,
    descricao: 'Intensos e cremosos, feitos com chocolate premium e decoração à mão.',
    detalhes:
      'Bolos decorados para aniversários, casamentos e ocasiões especiais. Fale com a gente para personalizar sabor, tamanho e decoração.',
  },
  {
    id: 'almoco',
    nome: 'Almoço',
    imagem: '/pratoFeito.png',
    largura: 327,
    altura: 434,
    descricao: 'Prato feito completo, servido das 12:00 às 14:00.',
    detalhes:
      'Pratos balanceados com proteína, legumes e acompanhamentos frescos, preparados na hora para quem busca uma refeição completa no meio do dia.',
  },
]

export const valores = [
  {
    titulo: 'Qualidade',
    descricao: 'Ingredientes selecionados e receitas tradicionais em cada produto que sai do forno.',
  },
  {
    titulo: 'Frescura',
    descricao: 'Produção diária, do pão ao doce, para garantir sabor e textura no ponto certo.',
  },
  {
    titulo: 'Tradição',
    descricao: 'Desde 1990 unindo receitas de família ao cuidado no atendimento de cada cliente.',
  },
]

export const contato = {
  telefone: '(48) 3433-4451',
  telefoneHref: '+554834334451',
  endereco: 'R. Henrique Lage, 1743 — Santa Bárbara, Criciúma - SC, 88804-018',
  mapaSrc:
    'https://maps.google.com/maps?q=R.+Henrique+Lage,+1743,+Santa+B%C3%A1rbara,+Cricium%C3%A1+-+SC,+88804-018&output=embed',
  horarios: [
    { dia: 'Segunda a Sexta', horas: '6:00 – 20:00' },
    { dia: 'Sábado', horas: '6:00 – 20:00' },
    { dia: 'Domingo', horas: 'Fechado' },
  ],
  email: 'contato@padariasilvano.com.br',
  redesSociais: [
    { rotulo: 'Facebook', href: 'https://facebook.com/', icone: 'facebook' },
    { rotulo: 'Instagram', href: 'https://instagram.com/', icone: 'instagram' },
    { rotulo: 'WhatsApp', href: 'https://wa.me/554834334451', icone: 'whatsapp' },
  ],
}

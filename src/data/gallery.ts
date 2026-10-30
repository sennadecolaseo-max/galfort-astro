// Fotos de obras: src/assets/trabalhos/<n>.webp
// ALT: descrevem só o que aparece em cada foto (tipo de construção, cobertura, cor, cena).
// Sem nome de cliente, cidade ou ano, porque a imagem não confirma isso. Se a Galfort informar
// obra, cliente ou local, acrescente ao alt da foto correspondente.
export const ALT_OVERRIDES: Record<number, string> = {
  1: 'Fachada lateral de galpão comercial com platibanda vermelha e bandeirolas no topo',
  2: 'Prédio comercial com cobertura metálica vermelha curva e pátio de veículos',
  3: 'Loja de veículos de grande porte com cobertura metálica vermelha e estacionamento amplo',
  4: 'Fachada envidraçada com cobertura metálica vermelha em arco, vista da rua',
  5: 'Interior de galpão com treliças metálicas brancas no teto, luminárias e corredor entre veículos',
  6: 'Interior de grande galpão com cobertura em treliças metálicas e veículos expostos sob decoração natalina',
  7: 'Vista interna de cobertura metálica com treliças e telhas translúcidas sobre pátio de veículos',
  8: 'Fachada de prédio comercial com cobertura metálica vermelha arredondada e vitrines de vidro',
  9: 'Galpão logístico de fachada cinza com docas de carga numeradas, visto da rua',
  10: 'Lateral de galpão industrial com paredes bege e cobertura metálica',
  11: 'Galpão logístico com escritórios em tijolo aparente e docas de carga',
  12: 'Galpão logístico com escritórios e docas de carga, visto da avenida',
  13: 'Galpão industrial com cobertura metálica inclinada e fachada bege',
  14: 'Fachada de galpão com escritório em tijolo aparente e letreiro da empresa, vista da rua',
  15: 'Galpão de distribuição com cobertura metálica e docas de carga, cercado por grade',
  16: 'Fachada de concessionária de veículos de esquina com vitrines de vidro',
  17: 'Galpões de cobertura metálica azul em arco, com muro branco e motos estacionadas',
  18: 'Série de galpões azuis com cobertura metálica em arco e estacionamento de motos',
  19: 'Estrutura metálica elevada com fechamento listrado em laranja e branco, vista entre árvores',
  20: 'Edifício industrial branco com cobertura metálica e área coberta para veículos',
  21: 'Galpão industrial azul em terreno elevado, com morros ao fundo',
  22: 'Grande galpão de fechamento metálico azul em terreno em declive',
  23: 'Interior de galpão com treliças metálicas no teto e luminárias suspensas sobre pátio de veículos',
  24: 'Interior de cobertura metálica ampla com treliças e luminárias sobre pátio de veículos',
  25: 'Fachada de loja de veículos com cobertura metálica vermelha e bandeira na entrada',
  26: 'Detalhe interno de treliça metálica branca e telhado com luminárias',
  27: 'Passarela metálica treliçada vermelha sobre uma via',
  28: 'Cobertura metálica circular em treliças sobre estabelecimento comercial, em foto antiga',
  29: 'Interior de galpão em obra com cobertura metálica treliçada e paredes de bloco',
  30: 'Fachada de loja de veículos com estrutura metálica azul e grande painel de vidro',
  31: 'Estrutura metálica em obra de ampliação sobre construção existente em área urbana',
  32: 'Estrutura metálica de cobertura em montagem sobre paredes de bloco',
  33: 'Estrutura metálica de telhado em duas águas em montagem sobre edificação de dois pavimentos',
  34: 'Obra de galpão com guindaste, pilares metálicos azuis e materiais em primeiro plano',
  35: 'Montagem de treliças metálicas brancas sobre construção de concreto',
  36: 'Estrutura metálica em arco com treliças em montagem, vista de baixo',
  37: 'Içamento de peças metálicas por guindaste sobre edifício de tijolo aparente',
  38: 'Vista interna de estrutura metálica de cobertura com pilares e travessas',
  39: 'Estrutura metálica de cobertura em montagem ao lado de paredes de bloco',
  40: 'Cobertura metálica em treliças sobre pilares de concreto em obra, com operário em primeiro plano',
  41: 'Estrutura metálica em arco montada em terreno aberto',
  42: 'Fachada de edifício com estrutura metálica vermelha aparente e painéis de vidro azul',
  43: 'Ginásio coberto com telhado metálico curvo e fachada de bloco',
  44: 'Estrutura metálica treliçada em arco em montagem, com carros estacionados ao lado',
  45: 'Grande cobertura metálica em arco sobre pilares treliçados, em terreno de obra',
  46: 'Cobertura de quadra esportiva com treliças metálicas em arco e telhas com faixas translúcidas',
  47: 'Vigas metálicas vermelhas montadas sobre um canal, em obra urbana',
  48: 'Cobertura de vidro com estrutura metálica tracionada, vista de baixo',
  49: 'Estrutura metálica vermelha em treliças dentro de galpão em obra, sobre terreno de terra',
  50: 'Duas coberturas metálicas em arco sobre pilares treliçados, com terreno em terraplenagem',
  51: 'Treliças metálicas azuis em arco no pátio, ao lado de um galpão antigo',
  52: 'Galpão de blocos com cobertura metálica em montagem',
  53: 'Montagem de galpão com pilares metálicos, guindaste e treliças no solo',
};

export const GALLERY_COUNT = 51; // galeria do site original: 1..51
export const HOME_PHOTOS = [49, 50, 51, 52, 53, 46]; // fotos usadas na home original (52 e 53 só aparecem na home)

export function photoAlt(n: number) {
  return ALT_OVERRIDES[n] ?? `Estrutura metálica pré-fabricada em obra da Galfort (projeto ${n})`;
}

export const GALLERY = Array.from({ length: GALLERY_COUNT }, (_, i) => ({ n: i + 1, alt: photoAlt(i + 1) }));

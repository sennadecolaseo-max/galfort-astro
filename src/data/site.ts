type Address = {
  street: string;
  neighborhood?: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
};

export const SITE = {
  name: 'Galfort',
  legalTagline: 'Estrutura metálica pré-fabricada',
  url: 'https://galfort.com.br',
  locale: 'pt-BR',
  foundedYear: 1994,
  years: 30,
  maxSpanMeters: 50,
  phoneDisplay: '(11) 94071-9907',
  phoneE164: '+5511940719907',
  whatsappNumber: '5511940719907',
  address: {
    street: 'Rua Manoel de Oliveira, 269, Conjunto 04',
    city: 'Mogi das Cruzes',
    region: 'SP',
    country: 'BR',
    // TODO: informar neighborhood e postalCode quando a Galfort confirmar bairro e CEP.
  } as Address,
  sectors: ['Industrial', 'Logística', 'Comercial', 'Ginásios', 'Mezaninos', 'Edifícios'],
};

export function whatsappLink(message = 'Olá! Vim pelo site da Galfort e gostaria de solicitar um orçamento de estrutura metálica.') {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Sobre nós', href: '/#sobre-nos' },
  { label: 'Estrutura metálica', href: '/estrutura-metalica-pre-fabricada/' },
  { label: 'Aplicações', href: '/estruturas-metalicas/' },
  { label: 'Galeria', href: '/galeria/' },
  { label: 'Contato', href: '/contato/' },
] as const;

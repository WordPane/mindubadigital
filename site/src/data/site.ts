export const site = {
  name: 'Minduba Digital',
  phoneDisplay: '(62) 9 9322-4062',
  whatsappNumber: '5562993224062',
  email: 'comercial@mindubadigital.com.br',
  social: {
    facebook: 'https://www.facebook.com/mindubadigital',
    instagram: 'https://www.instagram.com/mindubadigital/',
    behance: 'https://www.behance.net/mindubadigital',
  },
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  default:
    'Olá, estou no site da Minduba Digital e gostaria de saber mais sobre os serviços!',
  trafego:
    'Olá! Quero saber mais sobre a gestão de Tráfego Pago da Minduba Digital.',
  sites:
    'Olá! Quero um site de alta conversão para o meu negócio. Podemos conversar?',
  redesSociais:
    'Olá! Quero saber mais sobre a Gestão de Redes Sociais da Minduba Digital.',
  estrategia:
    'Olá! Quero um diagnóstico estratégico para o meu negócio.',
  orcamento: 'Olá! Quero um orçamento grátis para o meu negócio.',
};

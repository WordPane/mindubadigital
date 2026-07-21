// Dados do estudo de caso exibido em /comparativo.
// Fonte: Lighthouse (simulação mobile) executado em 21/07/2026 nas URLs ao vivo.
// Para atualizar: rode o Lighthouse nos dois endereços e ajuste os valores abaixo.
export const comparativo = {
  testDate: '21/07/2026',
  psiLinks: {
    antigo:
      'https://pagespeed.web.dev/analysis/https-mindubadigital-com-br/c7j9x9f57i?form_factor=mobile',
    novo:
      'https://pagespeed.web.dev/analysis/https-mindubadigital-wordpane-xyz-br/3mlt67pzik?form_factor=mobile',
  },
  antigo: {
    rotulo: 'Site antigo',
    tecnologia: 'WordPress',
    url: 'mindubadigital.com.br',
    urlHref: 'https://mindubadigital.com.br/',
    score: 56,
    fcp: '4,8 s',
    lcp: '9,6 s',
    tbt: '190 ms',
    cls: '0,001',
    si: '7,9 s',
    peso: '2,9 MB',
  },
  novo: {
    rotulo: 'Site novo',
    tecnologia: 'Solução Minduba',
    url: 'mindubadigital.wordpane.xyz.br',
    urlHref: 'https://mindubadigital.wordpane.xyz.br/',
    score: 98,
    fcp: '1,2 s',
    lcp: '1,6 s',
    tbt: '0 ms',
    cls: '0',
    si: '4,1 s',
    peso: '188 KB',
  },
};

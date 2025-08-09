# Landing Page - Arquivos Estáticos

Esta pasta contém os arquivos estáticos prontos para deploy da landing page de conteúdo premium.

## Arquivos Gerados

- **index.html** - Página principal com meta tags SEO otimizadas
- **assets/index-CvwVFtkP.css** - CSS compilado e minificado (61KB)
- **assets/index-DO8okfOl.js** - JavaScript compilado e minificado (425KB)

## Como Usar

### Deploy em Qualquer Servidor Web

1. Faça upload de todos os arquivos desta pasta para seu servidor web
2. Configure o servidor para servir o `index.html` como página inicial
3. Certifique-se de que os arquivos da pasta `assets/` são servidos corretamente

### Estrutura de Pastas no Servidor

```
seu-dominio.com/
├── index.html
└── assets/
    ├── index-CvwVFtkP.css
    └── index-DO8okfOl.js
```

### Servidores Compatíveis

- Apache
- Nginx
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Qualquer servidor que sirva arquivos estáticos

### Configuração de HTTPS

Para sites com conteúdo sensível, certifique-se de:
- Usar certificado SSL/TLS
- Configurar redirect de HTTP para HTTPS
- Implementar headers de segurança adequados

## Características da Landing Page

- ✅ Totalmente responsiva (mobile-first)
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Design moderno e clean
- ✅ Formulário de compra funcional
- ✅ Animações suaves
- ✅ Tema escuro com acentos verdes

## Notas Técnicas

- Build gerado com Vite
- React aplicação compilada para vanilla JavaScript
- CSS com Tailwind compilado
- Sem dependências externas além das fontes Google
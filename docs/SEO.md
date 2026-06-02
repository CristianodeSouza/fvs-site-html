# SEO — FVS Incorporações

Otimização para mecanismos de busca.

## Meta Tags (index.html)

```html
<!-- Essencial -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FVS Incorporações | Imóveis de Alto Padrão em Gramado</title>

<!-- Descrição -->
<meta name="description" content="FVS Incorporações desenvolve residências de alto padrão em Gramado, unindo arquitetura, conforto, permanência e valor patrimonial.">

<!-- Author -->
<meta name="author" content="FVS Incorporações">

<!-- Indexação -->
<meta name="robots" content="index, follow">

<!-- Open Graph (Social) -->
<meta property="og:type" content="website">
<meta property="og:title" content="FVS Incorporações">
<meta property="og:description" content="Residências pensadas para viver Gramado com conforto, permanência e valor patrimonial.">
<meta property="og:url" content="https://fvs-incorporacoes.vercel.app">
<meta property="og:image" content="https://fvs-incorporacoes.vercel.app/assets/images/og-image.jpg">

<!-- Language -->
<html lang="pt-BR">
```

## Boas Práticas

### 01 — Semântica HTML

```html
<!-- ✓ Correto -->
<header>
  <nav>
    <a href="#manifesto">Manifesto</a>
  </nav>
</header>

<main>
  <section id="manifesto">
    <h1>Filosofia FVS</h1>
    <p>Conteúdo...</p>
  </section>
</main>

<footer>
  <p>&copy; FVS Incorporações</p>
</footer>

<!-- ✗ Errado -->
<div class="header">
  <div class="nav">
    <div class="link">...</div>
  </div>
</div>
```

### 02 — Headings

```html
<!-- ✓ Uma H1 por página -->
<h1>FVS Incorporações</h1>

<!-- ✓ H2 para seções -->
<h2>Gramado como Território</h2>

<!-- ✓ H3 para subseções -->
<h3>Arquitetura Premium</h3>

<!-- ✗ Nunca pular níveis -->
<h1>Título</h1>
<h3>Subtítulo</h3> <!-- Errado: falta H2 -->
```

### 03 — Imagens

```html
<!-- ✓ Alt text descritivo -->
<img src="gramado-arquitetura.jpg" alt="Residência de arquitetura premium em Gramado com vista para Serra Geral">

<!-- ✗ Alt text genérico -->
<img src="image.jpg" alt="Imagem">
```

### 04 — Links

```html
<!-- ✓ Anchor text descritivo -->
<a href="/empreendimentos">Conhecer os empreendimentos</a>

<!-- ✗ Anchor text genérico -->
<a href="/empreendimentos">Clique aqui</a>
```

### 05 — URLs

```
✓ /empreendimentos
✓ /gramado-territorio
✓ /experiencia-morar

✗ /page1
✗ /secao-2
✗ /index.php?id=123
```

## Estrutura de Dados (Schema Markup)

```html
<!-- Organizador Local -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FVS Incorporações",
  "image": "https://fvs-incorporacoes.vercel.app/assets/images/fvs-logo.png",
  "description": "FVS Incorporações desenvolve residências de alto padrão em Gramado",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Endereço]",
    "addressLocality": "Gramado",
    "addressRegion": "RS",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "telephone": "[Telefone]",
  "email": "[Email]",
  "url": "https://fvs-incorporacoes.vercel.app"
}
</script>
```

## Keywords Alvo

### Primárias

- Imóveis de alto padrão em Gramado
- Residências premium Gramado
- Casas de luxo Gramado
- Empreendimentos imobiliários Gramado

### Secundárias

- Arquitetura residencial Gramado
- Investimento imobiliário Gramado
- Morar em Gramado
- Imóveis exclusivos Rio Grande do Sul

## Performance SEO

- ✓ Carregamento rápido (< 3s)
- ✓ Mobile-friendly
- ✓ HTTPS
- ✓ Sitemap.xml (futuro)
- ✓ Robots.txt (futuro)

## Integrações Futuras

- Google Analytics
- Meta Pixel
- Google Tag Manager
- Google Search Console

## Checklist

- ✓ Título único (≤ 60 caracteres)
- ✓ Meta description (≤ 160 caracteres)
- ✓ Uma H1 por página
- ✓ Alt text em todas as imagens
- ✓ Links internos relevantes
- ✓ URLs amigáveis
- ✓ Mobile responsive
- ✓ Sem erros 404
- ✓ Velocidade otimizada

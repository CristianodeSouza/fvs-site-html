# Relatorio Fase 1 - SEO, GEO E Mapa De URLs

**Data:** 2026-07-29
**Escopo:** reforco tecnico de indexacao, dados estruturados e governanca de URLs sem alterar layout.

## Objetivo

Preparar o site FVS para evoluir com mais seguranca em SEO, GEO e Search Console, mantendo as URLs atuais estaveis e documentando como novas paginas devem ser criadas sem perda de indexacao.

## Entregas Realizadas

- Criado `MAPA_URLS_REESTRUTURACAO.md` com URLs atuais, anchors, redirects existentes e URLs futuras recomendadas pelo PRD.
- Inseridos blocos `application/ld+json` nas 5 paginas ativas do site.
- Adicionado schema institucional para `FVS Incorporacoes` como `Organization` e `RealEstateAgent`.
- Adicionado schema `WebSite` e `WebPage` nas paginas principais.
- Adicionado `BreadcrumbList` nas paginas internas.
- Adicionado `ItemList` na listagem de empreendimentos.
- Adicionado schema de residencia/imovel nas paginas Manhattan Residence e Ernesto 142.
- Adicionado schema `Article` na pagina editorial sobre investimento em Gramado.

## Paginas Cobertas

- `/`
- `/empreendimentos-imobiliarios`
- `/empreendimentos-imobiliarios/manhattan-residence-imovel-melhor-bairro-de-gramado-planalto-metro-quadrado-mais-caro-da-cidade`
- `/empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado`
- `/por-que-investir-em-imoveis-em-gramado`

## Regras Definidas

- O dominio canonical permanece sem `www`: `https://fvsinc.com.br`.
- URLs atuais nao devem ser removidas sem redirect 301.
- Novas paginas devem entrar no `sitemap.xml` somente quando publicadas e com conteudo real.
- Anchors da home continuam validas ate existirem paginas dedicadas.
- `Incorporadora` continua apontando para `/#manifesto` ate a criacao de `/a-fvs`.
- `Contato` deve apontar para `/#contato` ate a criacao de `/contato`.

## Observacoes Tecnicas

Os dados estruturados foram escritos em JSON-LD com termos ASCII seguros para evitar problemas de encoding em validadores, parsers e ferramentas de busca. O conteudo visivel do site permanece em portugues.

## Validacoes Necessarias

- Validar sintaxe de `script.js` com `node --check`.
- Validar parse dos blocos JSON-LD.
- Validar sitemap XML.
- Conferir se `robots.txt` continua apontando para `https://fvsinc.com.br/sitemap.xml`.

## Proxima Etapa Recomendada

Criar a pagina `/contato` com fluxo consultivo, telefone, WhatsApp, emails oficiais e tracking GA4 dedicado. Depois disso, criar `/a-fvs` para reduzir a dependencia de anchors institucionais na home.

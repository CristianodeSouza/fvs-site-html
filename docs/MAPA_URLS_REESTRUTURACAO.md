# Mapa De URLs E Redirects Da Reestruturacao FVS

**Projeto:** FVS Site HTML
**Data:** 2026-07-29
**Objetivo:** preservar SEO, GEO, Search Console e navegacao durante a evolucao da arquitetura do site.

---

## 1. Regra Principal

Nenhuma URL atualmente publicada deve ser removida sem:

1. registrar URL antiga;
2. definir URL destino;
3. criar redirect 301 em `vercel.json`;
4. atualizar links internos;
5. atualizar `sitemap.xml`;
6. validar no dominio `https://fvsinc.com.br`.

---

## 2. URLs Atuais Oficiais

| URL | Status | Funcao |
| --- | --- | --- |
| `/` | Manter | Home |
| `/empreendimentos-imobiliarios` | Manter | Listagem de empreendimentos |
| `/empreendimentos-imobiliarios/manhattan-residence-imovel-melhor-bairro-de-gramado-planalto-metro-quadrado-mais-caro-da-cidade` | Manter | Pagina Manhattan Residence |
| `/empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado` | Manter | Pagina Ernesto 142 |
| `/por-que-investir-em-imoveis-em-gramado` | Manter | Pagina editorial/SEO sobre investimento em Gramado |

---

## 3. Anchors Atuais

| Anchor | Origem | Observacao |
| --- | --- | --- |
| `/#manifesto` | Home | Usado como destino temporario de Incorporadora |
| `/#metodo` | Home | Metodo FVS |
| `/#confianca` | Home | Confianca FVS |
| `/#contato` | Home | Contato/CTA consultivo |

Essas anchors devem permanecer enquanto nao existirem paginas dedicadas.

---

## 4. Redirects Existentes Em `vercel.json`

| Origem | Destino |
| --- | --- |
| `/empreendimentos` | `/empreendimentos-imobiliarios` |
| `/manhattan-residence-gramado` | pagina atual do Manhattan |
| `/empreendimentos/manhattan-residence-bairro-planalto-gramado` | pagina atual do Manhattan |
| `/empreendimentos-imobiliarios/manhattan-residence-bairro-planalto-gramado` | pagina atual do Manhattan |
| `/ernesto-142-gramado` | pagina atual do Ernesto |
| `/empreendimentos/ernesto-142-lancamento-centro-gramado` | pagina atual do Ernesto |
| `/empreendimentos-imobiliarios/ernesto-142-lancamento-centro-gramado` | pagina atual do Ernesto |
| `/empreendimentos-imobiliarios/empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado` | pagina atual do Ernesto |
| `/por-que-investir-em-gramado` | `/por-que-investir-em-imoveis-em-gramado` |
| `/porque-investir-em-imoveis-gramado` | `/por-que-investir-em-imoveis-em-gramado` |

---

## 5. URLs Futuras Recomendadas Pelo PRD

| URL futura | Prioridade | Observacao |
| --- | --- | --- |
| `/a-fvs` | Alta | Concentrar conteudo institucional hoje parcialmente na Home |
| `/contato` | Alta | Centralizar WhatsApp, email, telefone e fluxo consultivo |
| `/caderno-fvs` | Media/Alta | Base editorial do PRD |
| `/caderno-fvs/historias` | Media | Categoria editorial |
| `/caderno-fvs/arquitetura-e-interiores` | Media | Categoria editorial |
| `/caderno-fvs/materiais-sustentabilidade-tecnologias` | Media | Categoria editorial |
| `/caderno-fvs/gramado-e-serra` | Media | Categoria editorial |
| `/caderno-fvs/mercado-e-patrimonio` | Media | Categoria editorial |
| `/caderno-fvs/obras-e-construcao` | Media | Categoria editorial |
| `/empreendimentos-imobiliarios/entregues` | Media | Usar somente com dados reais aprovados |

---

## 6. Estrategia Recomendada

### Curto prazo

- Manter as URLs atuais.
- Criar `/contato` primeiro, por ter baixo risco editorial e alto valor de conversao.
- Depois criar `/a-fvs`, migrando parte institucional da Home sem remover de imediato as anchors antigas.
- Manter `/#manifesto` redirecionando a experiencia para a Home enquanto `/a-fvs` nao estiver consolidada.

### Medio prazo

- Criar `caderno-fvs` apenas quando houver conteudo aprovado.
- Nao publicar categorias vazias.
- Nao criar pagina de entregues sem dados e imagens reais aprovadas.

---

## 7. Regras De Sitemap

Quando uma nova rota for publicada:

1. adicionar `<url>` correspondente no `sitemap.xml`;
2. usar canonical sem `www`;
3. incluir imagem principal quando existir;
4. manter `lastmod` atualizado;
5. validar localmente o XML antes do deploy.

---

## 8. Regras De Menu

Enquanto as paginas dedicadas nao existirem:

- `Incorporadora` aponta para `/#manifesto`;
- `Contato` aponta para `/#contato`;
- `Empreendimentos` aponta para `/empreendimentos-imobiliarios`;
- `Investir em Gramado` aponta para `/por-que-investir-em-imoveis-em-gramado`.

Depois da criacao das paginas:

- `Incorporadora` deve apontar para `/a-fvs`;
- `Contato` deve apontar para `/contato`;
- anchors antigas podem ser preservadas como suporte interno.

---

## 9. Decisao Da Auditoria

Manter a arquitetura HTML estatica nesta etapa e evoluir em pequenas entregas. Migracao para framework so deve ser discutida se a duplicacao manual passar a impedir a evolucao segura do site.

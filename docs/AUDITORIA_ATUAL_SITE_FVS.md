# Auditoria Atual do Site FVS

**Projeto:** FVS Site HTML  
**Repositorio:** `CristianodeSouza/fvs-site-html`  
**Dominio de producao:** `https://fvsinc.com.br/`  
**Data da auditoria:** 2026-07-29  
**Escopo:** auditoria tecnica antes da reestruturacao de usabilidade e interacao.

---

## 1. Base De Decisao

Documentos oficiais usados como referencia:

1. `docs/README_CODEX_REESTRUTURACAO.md`
2. `docs/PRD_REESTRUTURACAO_SITE_FVS.md`
3. `docs/USABILIDADE_INTERACAO_SITE_FVS.pdf`
4. `docs/USABILIDADE_INTERACAO_SITE_FVS.md`
5. `docs/AUDITORIA_TECNICA_OBRIGATORIA.md`
6. `docs/IMPLEMENTATION_PLAN_REESTRUTURACAO.md`

Regra principal: nenhuma implementacao estrutural deve comecar antes desta auditoria estar registrada no repositorio.

---

## 2. Stack

| Item | Resultado |
| --- | --- |
| Framework | Nenhum framework identificado |
| Tipo de projeto | Site HTML estatico |
| React | Nao utilizado |
| TypeScript | Nao utilizado |
| Tailwind | Nao utilizado |
| CSS | `style.css` unico, com variaveis CSS e media queries |
| JavaScript | `script.js` unico |
| Package manager | Nao identificado |
| `package.json` | Ausente |
| Build local | Nao ha etapa de build configurada |
| Deploy | Vercel, via `vercel.json` |
| Analytics | Google Analytics `G-MDV4CSW4RK` em todas as paginas auditadas |
| Bibliotecas externas em runtime | Google Fonts, Lenis via CDN, GSAP/ScrollTrigger via CDN |

Conclusao: o PRD menciona exemplos em `app/`, `components/` e templates reutilizaveis, mas o projeto atual nao e Next.js/React. A reestruturacao deve respeitar que a base atual e HTML estatico, ou entao definir explicitamente uma migracao de arquitetura antes de implementar os conceitos de componentes do PRD.

---

## 3. Estrutura Atual

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Home |
| `style.css` | Design system, layout, responsividade, animacoes e estilos de todas as paginas |
| `script.js` | Menu, scroll suave, animacoes, hero video, lightbox e interacoes |
| `robots.txt` | Regras de rastreamento e IA |
| `sitemap.xml` | Sitemap principal |
| `vercel.json` | Headers e redirects |
| `assets/images/` | Logos, imagens de capa, imagens de projetos e galerias |
| `assets/videos/` | Video hero e video de intro/logo |
| `empreendimentos-imobiliarios/index.html` | Pagina de listagem de empreendimentos |
| `empreendimentos-imobiliarios/.../index.html` | Paginas internas do Manhattan e Ernesto |
| `por-que-investir-em-imoveis-em-gramado/index.html` | Pagina editorial/SEO sobre investimento |
| `docs/` | Documentacao oficial do projeto |

Pastas esperadas pelo PRD que nao existem atualmente: `app/`, `components/`, `hooks/`, `lib/`, `styles/`, `public/`, `data/`, `content/`, `api/`.

---

## 4. Rotas

| URL | Arquivo | Responsabilidade | Status |
| --- | --- | --- | --- |
| `/` | `index.html` | Home institucional/comercial | Ativa |
| `/empreendimentos-imobiliarios` | `empreendimentos-imobiliarios/index.html` | Listagem de empreendimentos | Ativa |
| `/empreendimentos-imobiliarios/manhattan-residence-imovel-melhor-bairro-de-gramado-planalto-metro-quadrado-mais-caro-da-cidade` | `empreendimentos-imobiliarios/manhattan-residence-imovel-melhor-bairro-de-gramado-planalto-metro-quadrado-mais-caro-da-cidade/index.html` | Pagina Manhattan Residence | Ativa |
| `/empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado` | `empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado/index.html` | Pagina Ernesto 142 | Ativa |
| `/por-que-investir-em-imoveis-em-gramado` | `por-que-investir-em-imoveis-em-gramado/index.html` | Pagina SEO/editorial sobre Gramado | Ativa |

Rotas recomendadas pelo PRD que ainda nao existem:

- `/a-fvs`
- `/empreendimentos/entregues`
- `/caderno-fvs`
- `/caderno-fvs/historias`
- `/caderno-fvs/arquitetura-e-interiores`
- `/caderno-fvs/materiais-sustentabilidade-tecnologias`
- `/caderno-fvs/gramado-e-serra`
- `/caderno-fvs/mercado-e-patrimonio`
- `/caderno-fvs/obras-e-construcao`
- `/contato`

Redirects existentes em `vercel.json` preservam algumas URLs antigas para as rotas atuais.

---

## 5. Componentes / Blocos Reutilizaveis Atuais

Como o projeto e HTML estatico, os "componentes" atuais sao padroes de markup e classes repetidos entre paginas.

| Bloco | Localizacao | Responsabilidade | Classificacao |
| --- | --- | --- | --- |
| Header | Todas as paginas HTML | Navegacao superior, menu hamburguer, logo | Refatorar para padrao unico |
| Menu expandido | Todas as paginas HTML | Navegacao em overlay com contexto e links | Refatorar para evitar divergencia entre paginas |
| Brand signature | Todas as paginas HTML | Logo FVS e variacoes claro/escuro | Reutilizar |
| Hero da Home | `index.html` | Apresentacao principal com video | Refatorar conforme nova ordem da Home |
| Hero de paginas internas | Paginas internas | Titulo, subtitulo e imagem de capa | Reutilizar com ajustes |
| Cards de empreendimentos | Home e listagem | Apresentar Manhattan e Ernesto | Refatorar para status e CTA padronizados |
| Galerias | Paginas Manhattan e Ernesto | Mosaico de imagens e lightbox | Refatorar para categorias, swipe e estado consistente |
| Lightbox | Paginas de empreendimento | Imagem ampliada, navegacao anterior/proxima | Reutilizar com melhorias |
| CTA consultivo | Home e paginas internas | Conversao via WhatsApp | Refatorar com tracking e alinhamento |
| Footer | Home e internas | Contato, institucional, redes | Refatorar conforme PRD |

Componentes que devem ser criados ou consolidados como padroes, mesmo em HTML estatico:

- `Header`
- `Footer`
- `Hero`
- `ProjectCard`
- `StatusBadge`
- `CTAButton`
- `Gallery`
- `Lightbox`
- `SectionHeader`
- `ArticleCard`
- `ContactBlock`
- `ReferenceList`

---

## 6. Design System

### Tokens Encontrados

| Token | Valor |
| --- | --- |
| `--verde-profundo` | `#1D281F` |
| `--verde-serra` | `#2B3A2C` |
| `--pedra` | `#C2AE8F` |
| `--pedra-clara` | `#DDD0BB` |
| `--cobre` | `#8C6A3F` |
| `--off-white` | `#F4F0E8` |
| `--branco-quente` | `#FAF7F0` |
| `--preto-quente` | `#1A1A18` |
| `--font-display` | `Cormorant Garamond` |
| `--font-body` | `Outfit` |
| `--motion-fast` | `300ms` |
| `--motion-normal` | `700ms` |
| `--motion-slow` | `1200ms` |
| `--header-height` | `78px` |

### Breakpoints Encontrados

- `1081px`
- `1080px`
- `900px`
- `760px`
- `640px`
- `460px`
- regra extra por altura: `(min-width: 901px) and (max-height: 760px)`
- `prefers-reduced-motion: reduce`

### Inconsistencias / Riscos

- `style.css` concentra todo o design system e estilos de paginas, com aproximadamente 132 KB.
- Ha varias regras mobile em blocos distintos, o que aumenta risco de regressao em responsividade.
- PRD pede componentes padronizados, mas a implementacao atual depende de repeticao manual de HTML.
- Tipografia usa apenas duas familias, mas o uso de tamanhos em secoes diferentes ainda precisa de QA visual por viewport.
- O sistema de animacao existe, mas depende de CDNs externos em runtime.

---

## 7. Conteudo E Dados

Origem atual dos dados: hardcoded nos arquivos HTML.

| Tipo de conteudo | Estado atual |
| --- | --- |
| Projetos | Hardcoded em Home, listagem e paginas internas |
| Equipe | Nao identificado como modelo estruturado |
| Artigos | Nao ha Caderno FVS implementado; pagina de investimento e HTML estatico |
| Materiais | Conteudo disperso em secoes, sem modelo estruturado |
| Galerias | Hardcoded com links diretos para arquivos |
| Contato | Hardcoded com WhatsApp, Instagram, telefone e emails |
| Referencias | Hardcoded na pagina de investimento |

Risco: qualquer alteracao de status, CTA, imagem, legenda ou SEO exige editar HTML manualmente em multiplos pontos.

---

## 8. Banco De Dados / CMS

Nao foi identificado banco de dados, ORM, migracoes ou CMS.

Conclusao: se o PRD for implementado mantendo HTML estatico, sera necessario criar uma camada de dados simples em JSON/JS ou Markdown para reduzir duplicacao. Se for decidido migrar para framework, a migracao deve ser uma etapa separada e aprovada.

---

## 9. Integracoes

| Integracao | Estado |
| --- | --- |
| WhatsApp | Links `wa.me` contextualizados por pagina |
| Instagram | `https://www.instagram.com/fvs.inc/` |
| Email | `comercial@fvsinc.com.br` e `engenharia@fvsinc.com.br` na Home |
| Telefone | `(54) 99921-4824` / `tel:+5554999214824` |
| Google Analytics | Tag `G-MDV4CSW4RK` em todas as 5 paginas |
| Formularios | Nao ha formularios HTML identificados |
| Maps | Nao identificado |
| CMS | Nao identificado |
| Lenis | Carregado via CDN em `script.js` |
| GSAP / ScrollTrigger | Carregado via CDN em `script.js` |

Riscos:

- CTAs de WhatsApp nao registram eventos GA4 especificos no `script.js`.
- Nao ha formulario estruturado para captura de lead, consentimento ou origem.
- Dependencia de CDN pode afetar animacoes caso o recurso externo falhe.

---

## 10. SEO

### Pontos Positivos

- Todas as 5 paginas auditadas possuem `title`.
- Todas possuem `meta description`.
- Todas possuem `canonical` apontando para `https://fvsinc.com.br`.
- Todas possuem Open Graph e Twitter Card.
- Todas possuem uma tag `h1`.
- `robots.txt` existe e aponta para `https://fvsinc.com.br/sitemap.xml`.
- `sitemap.xml` existe e foi validado localmente como XML bem formado.
- Links internos auditados nao apontam para arquivos locais inexistentes.

### Problemas / Lacunas

- Nao ha dados estruturados JSON-LD identificados nas paginas.
- Nao ha breadcrumbs estruturais nas paginas internas.
- O PRD recomenda `/a-fvs`, `/contato` e `caderno-fvs`, mas essas rotas ainda nao existem.
- A pagina de investimento possui muitas referencias externas, mas precisa de verificacao editorial e padronizacao de exibicao.
- Sitemap inclui imagens, mas ainda deve ser reavaliado apos qualquer mudanca de URL ou arquitetura.

---

## 11. Performance

### Evidencias

- Total de assets em `assets/`: 93 arquivos.
- Peso total aproximado dos assets: 74,72 MB.
- `style.css`: aproximadamente 132 KB.
- `script.js`: aproximadamente 19 KB.
- Maior asset: `assets/videos/fvs-incorporadora-gramado.mp4`, com aproximadamente 16,6 MB.
- Varias imagens da galeria Ernesto passam de 1 MB.

### Principais Gargalos

1. Video hero pesado para mobile.
2. Galerias com muitas imagens grandes.
3. CSS monolitico.
4. Dependencia de bibliotecas externas para animacao.
5. Imagens em JPG/PNG sem versoes modernas identificadas, como WebP/AVIF.

### Recomendacoes

- Criar versoes responsivas e comprimidas das imagens.
- Separar hero image/video por desktop/mobile.
- Definir preload apenas para assets criticos.
- Adiar galerias extensas.
- Considerar WebP/AVIF mantendo qualidade arquitetonica.

---

## 12. Acessibilidade

### Pontos Positivos

- Menu usa `aria-expanded`, `aria-controls` e `aria-hidden`.
- Lightbox usa `role="dialog"` e `aria-modal`.
- Imagens auditadas possuem atributo `alt` ou sao marcadas como decorativas.
- Cada pagina possui um `h1`.
- Existe regra `prefers-reduced-motion`.

### Problemas / Lacunas

- Nao ha validacao automatizada de contraste nesta auditoria.
- Nao ha teste de teclado completo registrado.
- Lightbox precisa de QA real para foco, escape e retorno ao item original.
- Nao ha formulario, portanto labels/erros/consentimento ainda nao existem para fluxo de contato.

---

## 13. Responsividade

Breakpoints CSS existem para mobile e desktop. A auditoria estatica indica preocupacao real com responsividade, especialmente em:

- header mobile;
- hero mobile;
- menu overlay;
- lightbox;
- tipografia mobile;
- secoes de empreendimentos;
- cards e galerias.

### Limite Da Auditoria Atual

Nao foi possivel executar screenshot automatizado por Playwright neste ambiente porque o pacote `playwright` nao esta instalado no runtime local. Portanto, a responsividade foi auditada por estrutura CSS e historico de breakpoints, mas ainda exige QA visual nas larguras:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1440px

### Riscos Mobile

- Conteudo e cards hardcoded dificultam ajustes globais.
- Galerias longas podem pesar e criar percepcao de lentidao.
- Hero com video pesado pode travar em celulares.
- Header e menu precisam ser validados em viewport real.

---

## 14. Validacoes Executadas

| Validacao | Resultado |
| --- | --- |
| `node --check script.js` | OK |
| Links locais em HTML | OK, sem referencias quebradas encontradas |
| Assets locais referenciados por HTML | OK |
| Parse local do `sitemap.xml` | OK, XML bem formado |
| Presenca de `robots.txt` | OK |
| Presenca de GA4 nas paginas | OK |
| Playwright para screenshots | Nao disponivel no runtime |

---

## 15. Riscos Principais

| Risco | Severidade | Observacao |
| --- | --- | --- |
| Arquitetura HTML estatico vs PRD em componentes | Alta | O plano fala em `app/` e `components/`, mas o projeto atual nao usa framework |
| Duplicacao de header/menu/footer entre paginas | Alta | Mudancas precisam ser repetidas manualmente |
| Conteudo hardcoded | Alta | Dificulta evolucao, controle editorial e consistencia |
| Performance de midia | Alta | 74,72 MB em assets; video hero de 16,6 MB |
| Galerias extensas | Media/Alta | Risco de carregamento lento e experiencia mobile pesada |
| Ausencia de Caderno FVS | Media/Alta | Requisito central do PRD ainda nao implementado |
| Ausencia de `/a-fvs` e `/contato` dedicadas | Media | PRD pede separacao institucional e contato |
| Analytics sem eventos contextuais | Media | GA4 existe, mas eventos especificos ainda nao foram mapeados |
| Dados estruturados ausentes | Media | Afeta SEO/GEO e entendimento por buscadores |
| QA visual mobile pendente | Media | Necessario antes de entregar mudancas ao CEO |

---

## 16. Melhorias Recomendadas Antes Da Implementacao Visual

1. Definir se a evolucao continuara em HTML estatico ou se havera migracao para framework.
2. Se mantiver HTML estatico, criar uma estrutura simples de dados reutilizaveis para projetos, contatos, CTAs, imagens e SEO.
3. Consolidar header, menu e footer para reduzir divergencias manuais.
4. Planejar as novas rotas do PRD sem quebrar URLs atuais.
5. Criar mapa de redirects antes de alterar slugs.
6. Otimizar o video hero e imagens mais pesadas.
7. Definir eventos GA4 para CTAs, WhatsApp, galeria e cards.
8. Criar dados estruturados para Organization, LocalBusiness, BreadcrumbList, WebPage e, quando aplicavel, Article/FAQ.
9. Fazer QA mobile visual em todos os breakpoints obrigatorios.

---

## 17. Plano Tecnico De Execucao Sugerido

### Fase 1 - Fundacao Sem Redesenho

- Criar inventario de conteudo reutilizavel.
- Definir estrutura de dados local.
- Padronizar header/menu/footer.
- Preservar URLs atuais.
- Criar eventos basicos de analytics.

### Fase 2 - Arquitetura Da Jornada

- Reorganizar Home para: Hero, Empreendimentos, FVS, investimento/territorio, contato.
- Criar pagina institucional `/a-fvs` ou decidir manter ancora temporaria com plano de migracao.
- Criar pagina `/contato` ou bloco dedicado com futura rota.
- Preparar base para Caderno FVS.

### Fase 3 - Empreendimentos

- Padronizar cards com status.
- Separar conceito, arquitetura, interiores, materiais, plantas, galeria, localizacao e contato.
- Criar categorias nas galerias.
- Melhorar lightbox e swipe.

### Fase 4 - SEO, GEO E Performance

- Atualizar sitemap conforme novas rotas.
- Adicionar dados estruturados.
- Otimizar imagens e videos.
- Revisar headings, canonicals e OG.
- Validar Google Search Console apos deploy.

### Fase 5 - QA E Aprovacao

- Testar mobile primeiro.
- Validar 320, 360, 390, 430, 768, 1024 e 1440.
- Testar menu, lightbox, WhatsApp, links, sitemap e analytics.
- Gerar relatorio final de criterios de aceite.

---

## 18. Decisao Necessaria Antes De Codar

Antes da primeira implementacao estrutural, deve ser tomada uma decisao:

**Continuar em HTML estatico evoluindo por padroes reutilizaveis, ou migrar para uma arquitetura com componentes reais?**

Recomendacao desta auditoria: manter a base HTML estatico nesta etapa, reduzir duplicacao e evoluir em pequenas entregas. Migrar para framework agora aumentaria risco, tempo e chance de regressao sem ser requisito explicito do usuario.

---

## 19. Conclusao

O site atual possui boa base visual, SEO basico configurado, GA4 instalado, sitemap/robots presentes e um sistema de classes consistente o suficiente para evolucao incremental.

Os maiores problemas tecnicos sao: duplicacao manual, ausencia de camada de dados, peso de midia, falta das novas rotas editoriais/institucionais do PRD e necessidade de QA visual mobile mais rigoroso.

Proximo passo recomendado: aprovar esta auditoria como base e iniciar a Fase 1, com foco em fundacao, padronizacao e preservacao de URLs antes de alterar a experiencia visual.

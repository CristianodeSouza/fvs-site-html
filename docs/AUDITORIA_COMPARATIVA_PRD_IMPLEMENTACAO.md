# Auditoria Comparativa — Solicitação x Implementação FVS

Data da auditoria: 2026-07-29  
Ambiente auditado: produção em https://fvsinc.com.br  
Commit de referência auditado: `aa79f67 Fix published menu CSS and broken encoding`

## 1. Objetivo

Este documento compara o que foi solicitado nos documentos de reestruturação do site FVS com o que foi realmente implementado e publicado em produção.

Fontes usadas:

- `docs/PRD_REESTRUTURACAO_SITE_FVS.md`
- `docs/USABILIDADE_INTERACAO_SITE_FVS.md`
- `docs/ACCEPTANCE_CRITERIA.md`
- Produção publicada em `https://fvsinc.com.br`
- Repositório local no commit `aa79f67`

Legenda:

- `[OK]` atendido em produção.
- `[PARCIAL]` parcialmente atendido ou atendido apenas para parte do escopo.
- `[PENDENTE]` não atendido.
- `[NAO VERIFICADO]` não validado nesta auditoria por exigir teste visual, Lighthouse, formulário real, console completo ou fonte externa aprovada.

## 2. Resumo executivo

O site publicado atende parte importante da fundação técnica e visual já trabalhada: páginas principais estão no ar, menu voltou a funcionar, problemas de encoding encontrados em produção foram corrigidos, GA4 está presente, JSON-LD foi aplicado nas páginas principais, sitemap e robots existem, e há páginas de empreendimento para Manhattan e Ernesto.

Porém, a reestruturação completa descrita no PRD ainda não está concluída. As maiores lacunas são arquiteturais: não existem páginas dedicadas publicadas para `A FVS`, `Contato`, `Caderno FVS` e `Entregues`. O fluxo de contato ainda depende principalmente de links/CTAs para WhatsApp e e-mail, sem página dedicada ou formulário. O Caderno FVS, as categorias editoriais, a página institucional completa, os componentes avançados e a matriz completa de QA mobile/performance/acessibilidade ainda precisam ser executados.

Conclusão objetiva: o que está no ar é uma versão parcial e funcional, não a entrega completa do PRD.

## 3. Evidências da produção

Auditoria HTTP feita em `https://fvsinc.com.br`:

| URL | Status | Evidência |
| --- | ---: | --- |
| `/` | 200 | Título publicado, GA4 presente, JSON-LD presente, sem caracteres quebrados detectados. |
| `/empreendimentos-imobiliarios` | 200 | Página publicada, GA4 presente, JSON-LD presente, sem caracteres quebrados detectados. |
| `/empreendimentos-imobiliarios/manhattan-residence-imovel-melhor-bairro-de-gramado-planalto-metro-quadrado-mais-caro-da-cidade` | 200 | Página publicada, GA4 presente, JSON-LD presente, sem caracteres quebrados detectados. |
| `/empreendimentos-imobiliarios/ernesto-142-imovel-lancamento-localizado-no-centro-gramado` | 200 | Página publicada, GA4 presente, JSON-LD presente, sem caracteres quebrados detectados. |
| `/por-que-investir-em-imoveis-em-gramado` | 200 | Página publicada, GA4 presente, JSON-LD presente, sem caracteres quebrados detectados. |
| `/a-fvs` | 404 | Página institucional dedicada ainda não publicada. |
| `/contato` | 404 | Página dedicada de contato ainda não publicada. |
| `/caderno-fvs` | 404 | Caderno FVS ainda não publicado. |
| `/empreendimentos-imobiliarios/entregues` | 404 | Página/rota de entregues ainda não publicada. |
| `/sitemap.xml` | 200 | `Content-Type: application/xml`, 5 URLs listadas. |
| `/robots.txt` | 200 | Arquivo publicado e aponta para o sitemap. |

Validação funcional pontual:

- Menu de três riscos existe na produção.
- Ao abrir o menu, aparecem links para Home, Incorporadora, Empreendimentos, Investir em Gramado, Contato, WhatsApp e Instagram.
- `contato@fvsinc.com.br` não foi encontrado na home publicada.
- `comercial@fvsinc.com.br` e `engenharia@fvsinc.com.br` aparecem na produção.

## 4. Matriz de solicitação x entrega real

| Solicitação / requisito | Status | Evidência / observação |
| --- | --- | --- |
| Documentar auditoria técnica antes de avançar layout/código | [OK] | Há documentos em `docs/`, incluindo auditoria técnica, plano de implementação e relatórios de fase. |
| Manter fluxo Codex -> GitHub -> Vercel | [OK] | Alterações recentes foram commitadas e publicadas via Vercel. |
| Corrigir menu de três riscos que não abria | [OK] | Produção abre o menu e mostra os itens esperados. |
| Corrigir caracteres quebrados em produção | [OK] | Auditoria HTTP não encontrou `Territ?rio`, `Im?vel`, `Conhe?a`, `padr?o`, `lan?amento` ou equivalentes quebrados nas 5 páginas principais. |
| Inserir Google Analytics GA4 `G-MDV4CSW4RK` | [OK] | Tag encontrada nas 5 páginas principais publicadas. |
| Criar sitemap e robots | [PARCIAL] | Arquivos existem e respondem, mas sitemap lista apenas as 5 URLs publicadas. Rotas previstas no PRD ainda não entram porque não existem. |
| Aplicar SEO/GEO e dados estruturados | [PARCIAL] | JSON-LD está nas páginas principais. Falta completar para páginas futuras, Caderno, Contato, breadcrumbs e artigos. |
| Menu principal conforme PRD: Início, A FVS, Empreendimentos, Caderno FVS, Contato | [PARCIAL] | Navegação publicada usa Incorporadora, Empreendimentos e Investir em Gramado no topo. O menu expandido tem Contato, mas não há rota `/contato`; Caderno FVS não está publicado. |
| Página dedicada `A FVS` | [PENDENTE] | `/a-fvs` retorna 404. O conteúdo institucional aparece em seções da home, não em página dedicada completa. |
| Página dedicada `Contato` | [PENDENTE] | `/contato` retorna 404. Há CTAs e contatos no site, mas não página própria. |
| Caderno FVS editorial | [PENDENTE] | `/caderno-fvs` retorna 404. Categorias editoriais obrigatórias não foram publicadas. |
| Página `Empreendimentos` com projetos | [OK] | `/empreendimentos-imobiliarios` está publicada. |
| Página de Manhattan Residence | [OK] | Slug do Manhattan está publicado com status 200. |
| Página de Ernesto 142 | [OK] | Slug do Ernesto está publicado com status 200. |
| Página ou seção de empreendimentos entregues | [PENDENTE] | `/empreendimentos-imobiliarios/entregues` retorna 404. |
| Galerias/mosaicos de Ernesto e Manhattan | [PARCIAL] | Foram implementadas galerias e lightbox no histórico do projeto, mas esta auditoria não validou visualmente todas as categorias, imagens e comportamento touch. |
| Home com ordem Hero -> Empreendimentos -> Incorporadora FVS -> Investir em Gramado | [PARCIAL] | A home foi reorganizada para destacar empreendimentos logo após a hero. A camada “Investir em Gramado” existe como rota e seção relacionada, mas o PRD ainda pede Caderno e Contato dedicados. |
| Fluxo “Falar com um consultor FVS” | [PARCIAL] | Existem CTAs de conversa/WhatsApp, mas não há página de contato nem formulário com origem, empreendimento e tipo de contato. |
| Responsividade mobile | [PARCIAL] | Houve ajustes de menu, tipografia e espaçamentos. Falta evidência formal da matriz 320/360/390/430/tablet/landscape. |
| Sistema de animações e motion | [PARCIAL] | Existem scripts/estilos de motion no projeto, mas a auditoria atual não mediu percepção, timing ou qualidade visual em dispositivos reais. |
| Footer completo conforme PRD | [PARCIAL] | Footer tem contatos e links, mas falta estrutura completa com A FVS, Caderno, categorias, privacidade, termos e créditos. |
| Design system reutilizável completo | [PARCIAL] | Há padronização visual e componentes CSS, mas não há todos os componentes e estados exigidos pelo PRD. |
| Performance mobile testada | [NAO VERIFICADO] | Não foi executado Lighthouse nesta auditoria. |
| Acessibilidade completa | [NAO VERIFICADO] | Não foi feito teste formal de teclado, leitores de tela, ordem de foco e lightbox nesta auditoria. |
| Analytics de eventos | [PARCIAL] | GA4 está presente. Não foi validada instrumentação completa de eventos recomendados. |

## 5. Checklist consolidado de requisitos e critérios de aceite

### 5.1 Objetivos do produto

| Critério | Status | Evidência |
| --- | --- | --- |
| O usuário entende quem é a FVS. | [PARCIAL] | A home tem bloco institucional, mas não há página `A FVS` dedicada. |
| O usuário avalia empreendimentos. | [OK] | Página de empreendimentos e páginas Manhattan/Ernesto estão publicadas. |
| O usuário inicia conversa. | [PARCIAL] | Há CTAs e canais, mas falta página dedicada e formulário. |
| O site reduz esforço de compreensão. | [PARCIAL] | Navegação está mais curta, mas a arquitetura prevista ainda não está completa. |
| O site prioriza celular. | [PARCIAL] | Houve correções mobile, mas falta checklist formal completo. |

### 5.2 Arquitetura da informação

| Critério | Status | Evidência |
| --- | --- | --- |
| Menu com Início/Home. | [OK] | Home aparece no menu expandido. |
| Menu com A FVS/Incorporadora. | [PARCIAL] | Existe Incorporadora como âncora/seção; `/a-fvs` não existe. |
| Menu com Empreendimentos. | [OK] | Link publicado. |
| Menu com Caderno FVS. | [PENDENTE] | Não há rota publicada. |
| Menu com Contato. | [PARCIAL] | Aparece no menu expandido, mas `/contato` retorna 404. |
| Submenu de empreendimentos com Manhattan, Ernesto e Entregues. | [PARCIAL] | Manhattan e Ernesto existem; Entregues não existe. |
| Rodapé com navegação completa. | [PARCIAL] | Rodapé ainda não atende todos os itens do PRD. |
| URLs amigáveis. | [OK] | Slugs principais são legíveis e indexáveis. |

### 5.3 Home

| Critério | Status | Evidência |
| --- | --- | --- |
| Hero com frase principal e imagem/vídeo. | [OK] | Home publicada contém hero com vídeo/imagem e headline. |
| Empreendimentos logo após hero. | [OK] | Ordem foi ajustada conforme solicitação posterior. |
| Home não replica todo o conteúdo de A FVS. | [PARCIAL] | Há conteúdo institucional extenso na home porque página dedicada ainda não existe. |
| Manhattan e Ernesto distinguíveis. | [OK] | Ambos aparecem como empreendimentos. |
| CTAs específicos. | [PARCIAL] | Existem CTAs, mas ainda falta padronização completa por fluxo. |
| Um clique para empreendimento. | [OK] | Cards/links levam às páginas dos empreendimentos. |
| Um clique para contato. | [PARCIAL] | Há WhatsApp/e-mail, mas não página de contato dedicada. |
| Conteúdo editorial aponta para Caderno FVS. | [PENDENTE] | Caderno FVS não existe em produção. |

### 5.4 Página A FVS / Incorporadora

| Critério | Status | Evidência |
| --- | --- | --- |
| Página institucional dedicada. | [PENDENTE] | `/a-fvs` retorna 404. |
| História da FVS. | [PARCIAL] | Conteúdo institucional aparece na home. |
| Método FVS. | [PARCIAL] | Há bloco de método/conversa, mas não página completa. |
| Equipe e autoria somente com dados aprovados. | [PENDENTE] | Não há seção dedicada publicada. |
| Entregas e histórico com dados reais. | [PENDENTE] | Não há página/estrutura dedicada validada. |
| CTA de contato. | [PARCIAL] | Existem CTAs, mas falta página de contato. |

### 5.5 Empreendimentos

| Critério | Status | Evidência |
| --- | --- | --- |
| Página de listagem publicada. | [OK] | `/empreendimentos-imobiliarios` retorna 200. |
| Cards visualmente unificados. | [PARCIAL] | Ajustes foram feitos, mas esta auditoria não executou screenshot comparativo completo. |
| Status visível em todos os projetos. | [PARCIAL] | Status existe em conteúdo, mas precisa de padronização formal `StatusBadge`. |
| Diferenciar lançamento, disponível, entregue. | [PARCIAL] | Projetos atuais existem; rota de entregues não existe. |
| Cards escaláveis para novos projetos. | [PARCIAL] | Estrutura HTML existe, mas sem camada de dados/CMS configurável. |

### 5.6 Template de empreendimento

| Critério | Status | Evidência |
| --- | --- | --- |
| Hero com nome, endereço, status, imagem e CTA. | [PARCIAL] | Páginas publicadas têm hero/conteúdo, mas não foi validado visualmente item a item nesta auditoria. |
| História do endereço antes da ficha técnica, quando aprovado. | [PARCIAL] | Conteúdo editorial existe, mas não foi validado contra todas as seções do PRD. |
| Arquitetura, interiores, materiais e diferenciais. | [PARCIAL] | Conteúdo foi complementado em etapas anteriores, mas ainda não há checklist visual fechado por seção. |
| Tipologias e plantas. | [PARCIAL] | Imagens de plantas foram usadas em galerias; falta viewer/categorização formal. |
| Galeria completa com lightbox. | [PARCIAL] | Lightbox foi implementado, mas falta QA completo touch/teclado/progresso. |
| Localização e entorno. | [PARCIAL] | Há conteúdo de localização, mas não foi validado como mapa/rotina completa. |
| Contato identifica empreendimento. | [PARCIAL] | Links podem direcionar conversa, mas falta formulário/origem estruturada. |

### 5.7 Caderno FVS

| Critério | Status | Evidência |
| --- | --- | --- |
| Página de listagem do Caderno. | [PENDENTE] | `/caderno-fvs` retorna 404. |
| Categorias obrigatórias. | [PENDENTE] | Não publicadas. |
| Página de artigo. | [PENDENTE] | Não publicada. |
| Cards de artigo. | [PENDENTE] | Não publicados. |
| Metadados SEO por artigo. | [PENDENTE] | Não há artigos publicados. |
| Newsletter integrada ao Caderno. | [PENDENTE] | Não implementada. |

### 5.8 Contato e conversão

| Critério | Status | Evidência |
| --- | --- | --- |
| Página dedicada de contato. | [PENDENTE] | `/contato` retorna 404. |
| Tipos de contato: comercial/institucional. | [PARCIAL] | E-mails comercial e engenharia aparecem, mas sem página dedicada. |
| WhatsApp contextual. | [PARCIAL] | Há links de WhatsApp; origem/empreendimento não foi auditada como parâmetro. |
| Formulário com campos mínimos. | [PENDENTE] | Não há formulário dedicado publicado. |
| Consentimento se houver formulário. | [PENDENTE] | Depende do formulário. |
| Sucesso/erro do envio. | [PENDENTE] | Depende do formulário. |

### 5.9 Design system

| Critério | Status | Evidência |
| --- | --- | --- |
| Header reutilizável. | [OK] | Header comum nas páginas publicadas. |
| Menu desktop/mobile. | [PARCIAL] | Menu funciona; falta auditoria completa de foco e acessibilidade. |
| Footer reutilizável. | [PARCIAL] | Existe, mas incompleto contra PRD. |
| Hero, ProjectCard, CTAButton, Gallery e Lightbox. | [PARCIAL] | Componentes existem em HTML/CSS/JS, mas nem todos os estados foram auditados. |
| Componentes avançados: FloorPlanViewer, TeamCard, ConstructionUpdate, ContactForm, NewsletterForm, Breadcrumb, Tabs, Accordion, Loading/Empty/Error/Success. | [PENDENTE] | Não há comprovação de implementação completa. |
| Estados default/hover/focus/active/disabled/loading/success/error. | [PARCIAL] | Hover/focus básicos existem em parte; estados completos não foram auditados. |
| Consistência tipográfica. | [PARCIAL] | Houve ajustes, mas o PRD pede padronização total e QA visual. |

### 5.10 Responsividade

| Critério | Status | Evidência |
| --- | --- | --- |
| Sem overflow horizontal. | [NAO VERIFICADO] | Precisa teste em 320/360/390/430/tablet/landscape. |
| Menu abre e fecha corretamente no mobile. | [PARCIAL] | Menu abre em produção; falta teste de teclado/foco. |
| Textos sem quebras ruins. | [PARCIAL] | Ajustes foram feitos; falta varredura visual completa. |
| CTAs não bloqueiam conteúdo. | [NAO VERIFICADO] | Precisa teste visual por viewport. |
| Galeria touch funciona. | [NAO VERIFICADO] | Precisa teste manual/mobile. |
| Formulário funciona com teclado mobile. | [PENDENTE] | Não há formulário dedicado. |

### 5.11 Performance

| Critério | Status | Evidência |
| --- | --- | --- |
| Imagens otimizadas e lazy loading. | [PARCIAL] | Há assets e carregamento; falta auditoria de peso e dimensões. |
| Hero priorizado. | [PARCIAL] | Hero existe; falta medir LCP. |
| Mapa sob demanda. | [NAO VERIFICADO] | Não auditado. |
| Sem layout shift significativo. | [NAO VERIFICADO] | Requer Lighthouse/Web Vitals. |
| Mobile performance testada. | [NAO VERIFICADO] | Não executado nesta auditoria. |

### 5.12 Acessibilidade

| Critério | Status | Evidência |
| --- | --- | --- |
| Um H1 por página. | [NAO VERIFICADO] | Precisa varredura semântica completa. |
| Ordem de headings correta. | [NAO VERIFICADO] | Precisa varredura completa. |
| Imagens com alt. | [NAO VERIFICADO] | Precisa varredura completa. |
| Menu acessível por teclado. | [NAO VERIFICADO] | Precisa teste manual. |
| Lightbox fecha por teclado. | [NAO VERIFICADO] | Precisa teste manual. |
| Focus visível. | [NAO VERIFICADO] | Precisa teste visual. |
| `prefers-reduced-motion` respeitado. | [PARCIAL] | Há intenção no sistema de motion; falta validação formal. |

### 5.13 SEO técnico e GEO

| Critério | Status | Evidência |
| --- | --- | --- |
| Title por página. | [OK] | Títulos encontrados nas 5 páginas publicadas. |
| Meta description por página. | [NAO VERIFICADO] | Precisa varredura detalhada de conteúdo. |
| Canonical. | [NAO VERIFICADO] | Precisa varredura detalhada. |
| Open Graph. | [NAO VERIFICADO] | Precisa varredura detalhada. |
| JSON-LD aplicável. | [PARCIAL] | Presente nas 5 páginas principais; falta expandir para futuras páginas. |
| Sitemap atualizado. | [PARCIAL] | Atualizado para as 5 URLs publicadas; falta incluir novas rotas quando existirem. |
| Robots publicado. | [OK] | `/robots.txt` responde 200. |
| Breadcrumbs e links internos. | [PARCIAL] | Links existem; breadcrumbs formais não foram validados. |
| Sem links quebrados. | [NAO VERIFICADO] | Requer crawler completo. |

### 5.14 Analytics

| Critério | Status | Evidência |
| --- | --- | --- |
| GA4 instalado. | [OK] | `G-MDV4CSW4RK` encontrado nas páginas principais. |
| Eventos de CTA. | [NAO VERIFICADO] | Precisa testar dataLayer/gtag durante cliques. |
| Eventos de WhatsApp. | [NAO VERIFICADO] | Precisa testar clique real. |
| Eventos de galeria. | [NAO VERIFICADO] | Precisa testar interação. |
| Eventos de formulário sucesso/erro. | [PENDENTE] | Não há formulário dedicado. |
| Sem envio de PII. | [NAO VERIFICADO] | Depende da instrumentação final. |

### 5.15 Migração e publicação

| Critério | Status | Evidência |
| --- | --- | --- |
| Domínio principal sem www. | [OK] | Produção auditada em `https://fvsinc.com.br`. |
| Sitemap no domínio canônico. | [OK] | `https://fvsinc.com.br/sitemap.xml` responde 200. |
| Redirecionamentos preservados. | [NAO VERIFICADO] | Não foi feito teste completo de redirects. |
| Git com mudanças commitadas. | [OK] | Commit `aa79f67` publicado antes desta auditoria. |
| Deploy Vercel aprovado. | [OK] | Produção responde com mudanças recentes. |

## 6. Itens não verificados nesta auditoria

Estes pontos exigem uma rodada específica de QA visual e técnico:

- Lighthouse mobile e desktop.
- Core Web Vitals reais.
- Teste de navegação por teclado.
- Teste de leitor de tela.
- Teste de menu e lightbox com foco.
- Teste visual em 320, 360, 390, 430, tablet e landscape.
- Crawler completo de links internos.
- Teste de eventos GA4 com DebugView.
- Teste de WhatsApp com parâmetros por empreendimento.
- Teste de todas as imagens e galerias por categoria.

## 7. Principais pendências para cumprir o PRD completo

1. Criar `/contato` com página dedicada, WhatsApp contextual, e-mails por área, formulário se aprovado, estados de sucesso/erro e schema `ContactPage`.
2. Criar `/a-fvs` como página institucional dedicada, separando conteúdo que hoje está concentrado na home.
3. Criar `/caderno-fvs` com listagem, categorias obrigatórias e modelo de artigo.
4. Criar `/empreendimentos-imobiliarios/entregues` somente com dados e imagens aprovadas.
5. Fechar design system com componentes e estados documentados.
6. Fazer QA mobile real nos breakpoints definidos.
7. Rodar Lighthouse e corrigir performance/acessibilidade.
8. Validar SEO completo: canonical, OG, descriptions, breadcrumbs, sitemap, robots e JSON-LD por tipo de página.
9. Validar eventos de analytics e conversão.
10. Atualizar sitemap somente com URLs que existirem e retornarem 200.

## 8. Critérios de aceite para considerar a reestruturação concluída

A entrega só deve ser considerada completa quando:

- Todas as rotas previstas no PRD retornarem 200 ou houver decisão formal de removê-las do escopo.
- O menu principal e o menu expandido refletirem a arquitetura aprovada.
- Home, A FVS, Empreendimentos, páginas de empreendimento, Caderno e Contato tiverem função clara e não duplicarem conteúdo desnecessário.
- Manhattan, Ernesto e Entregues estiverem corretamente separados por status.
- Galerias tiverem lightbox, categorias, navegação touch e carregamento progressivo.
- Contato tiver fluxo rastreável e específico por intenção.
- Sitemap listar apenas URLs canônicas publicadas.
- Robots apontar para o sitemap canônico.
- GA4 medir CTAs, WhatsApp, formulário, galerias e artigos sem PII.
- Lighthouse e QA mobile forem documentados.
- Acessibilidade básica for validada.
- Não existirem caracteres quebrados, links internos quebrados ou páginas previstas em 404.

## 9. Próxima etapa recomendada

A próxima etapa mais importante é criar a página `/contato`. Ela fecha uma lacuna crítica de conversão e evita que o menu aponte para uma rota inexistente. Depois disso, a ordem recomendada é `/a-fvs`, `/caderno-fvs`, `entregues`, QA mobile e auditoria final de SEO/acessibilidade.

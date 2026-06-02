# FVS_SITE_HTML_MASTER_SPEC.md

# DOCUMENTAÇÃO MESTRE — NOVO SITE FVS EM HTML, CSS E JS PURO

## 1. DECISÃO TÉCNICA OFICIAL

O novo site institucional da FVS Incorporações será desenvolvido em estrutura simples, estática e controlável:

```text
HTML
CSS
JavaScript puro
GitHub
Vercel
```

Não utilizar neste projeto:

- Next.js
- React
- Tailwind CSS
- shadcn/ui
- Framer Motion
- GSAP inicialmente
- dependências npm
- ambiente local obrigatório
- porta 3000
- build complexo
- backend
- banco de dados

A prioridade do projeto é:

```text
experiência visual premium
direção de arte
luxo silencioso
clareza estrutural
publicação estável
manutenção simples
```

---

## 2. FLUXO OFICIAL DE PUBLICAÇÃO

```text
Claude Code
↓
Edita arquivos HTML/CSS/JS
↓
Commit
↓
Push GitHub
↓
Vercel lê o repositório
↓
Deploy automático
↓
Validação visual
```

A validação principal será feita pela URL publicada na Vercel.

Não depender de:

- localhost
- npm install
- npm run dev
- build local
- Vercel CLI

---

## 3. OBJETIVO DO SITE

Criar uma experiência digital premium para a FVS Incorporações, inspirada exclusivamente em:

```text
https://springs.estate/
```

O site deve vender a percepção de:

- morar bem;
- viver Gramado;
- luxo silencioso;
- segurança patrimonial;
- permanência;
- pertencimento;
- elegância;
- exclusividade;
- arquitetura como experiência.

A FVS não vende apenas imóveis.

A FVS vende a possibilidade de viver uma vida mais elegante, confortável e sofisticada em Gramado.

---

## 4. REFERÊNCIA VISUAL ÚNICA

A única referência visual permitida é:

```text
Springs Estate
https://springs.estate/
```

É proibido misturar referências de:

- SaaS;
- startup;
- landing page genérica;
- portal imobiliário;
- dashboard;
- template Bootstrap;
- site corporativo comum;
- construtora popular;
- imobiliária tradicional.

Toda decisão visual deve responder:

```text
Isto parece uma experiência premium como Springs Estate?
```

Se a resposta for não, deve ser revisado.

---

## 5. ESTRUTURA OFICIAL DE ARQUIVOS

```text
/fvs-site-html
│
├── index.html
├── style.css
├── script.js
├── README.md
├── FVS_HTML_MASTER_SPEC.md
│
├── /assets
│   ├── /images
│   ├── /videos
│   ├── /icons
│   └── /fonts
│
└── /docs
    ├── DESIGN_SYSTEM.md
    ├── MOTION_SYSTEM.md
    ├── CONTENT_STRUCTURE.md
    ├── SEO.md
    ├── ACCEPTANCE_CRITERIA.md
    └── DEPLOYMENT.md
```

---

## 6. STACK DEFINITIVA

### Linguagem

```text
HTML5
CSS3
JavaScript Vanilla
```

### Hospedagem

```text
Vercel
```

### Versionamento

```text
GitHub
```

### Editor/IA

```text
Claude Code
```

### Integrações opcionais futuras

- WhatsApp;
- Google Analytics;
- Meta Pixel;
- formulário via Formspree;
- Google Tag Manager.

---

## 7. PALETA OFICIAL FVS

Utilizar somente estas cores:

```css
:root {
  --verde-profundo: #1D281F;
  --verde-serra: #2B3A2C;
  --pedra: #C2AE8F;
  --pedra-clara: #DDD0B8;
  --off-white: #F4F0E8;
  --branco-quente: #FAF7F0;
  --preto-quente: #171713;
}
```

É proibido criar:

- escalas;
- aliases;
- variações automáticas;
- neutral-*;
- accent-*;
- success-*;
- warning-*;
- error-*;
- gray-*;
- black/white genérico fora dos tokens.

---

## 8. TIPOGRAFIA OFICIAL

### Títulos

```text
Cormorant Garamond
```

Uso:

- headlines;
- títulos de seção;
- frases editoriais;
- assinatura visual.

### Corpo e interface

```text
Outfit
```

Uso:

- menu;
- parágrafos;
- botões;
- legendas;
- informações técnicas.

Importação recomendada no HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 9. ESTRUTURA DA HOME

A Home deve ser construída em seções narrativas, não em blocos comerciais comuns.

### 01 — Header

Objetivo:

Criar entrada silenciosa, editorial e premium.

Elementos:

- menu discreto à esquerda;
- logo/nome FVS centralizado;
- contato à direita;
- composição inspirada no Springs Estate;
- sobreposição ao Hero;
- sem fundo branco sólido;
- sem aparência de SaaS.

---

### 02 — Hero Cinematográfico

Objetivo:

Gerar impacto emocional imediato.

Deve conter:

- imagem ou vídeo full screen;
- atmosfera de Gramado;
- arquitetura premium;
- título curto;
- subtítulo contemplativo;
- CTA discreto.

Exemplo de copy:

```text
Viver Gramado em sua forma mais elegante.
```

Subtexto:

```text
Residências pensadas para permanência, conforto e valor patrimonial.
```

---

### 03 — Manifesto

Objetivo:

Explicar a filosofia da FVS sem parecer publicidade.

Copy base:

```text
A FVS acredita que um imóvel de alto padrão não começa na metragem.
Começa na sensação de chegar, permanecer e reconhecer naquele lugar uma extensão da própria vida.
```

---

### 04 — Gramado como território

Objetivo:

Vender o contexto emocional e patrimonial da cidade.

Temas:

- clima;
- natureza;
- gastronomia;
- segurança;
- sofisticação;
- turismo;
- valorização;
- qualidade de vida.

---

### 05 — Experiência de Morar

Objetivo:

Mostrar que a FVS vende vivência, não apenas imóvel.

Elementos:

- lareira;
- varanda;
- café;
- vinho;
- família;
- descanso;
- arquitetura;
- silêncio.

---

### 06 — Empreendimentos

Objetivo:

Apresentar projetos de forma editorial, sem cara de catálogo.

Projetos possíveis:

- Manhattan;
- Ernesto 142;
- novos empreendimentos futuros.

Cada card deve conter:

- nome;
- localização;
- frase conceito;
- imagem;
- botão discreto.

---

### 07 — Arquitetura e Detalhes

Objetivo:

Mostrar padrão, acabamento e intenção.

Evitar excesso técnico.

Foco em:

- materialidade;
- luz;
- proporção;
- conforto;
- permanência.

---

### 08 — Valor Patrimonial

Objetivo:

Conectar emoção e investimento.

Mensagem:

```text
Alguns imóveis são comprados para morar.
Outros permanecem como parte da história da família.
```

---

### 09 — Galeria Imersiva

Objetivo:

Criar desejo visual.

Deve utilizar:

- imagens grandes;
- poucos textos;
- respiro;
- transições suaves.

---

### 10 — CTA Consultivo

Objetivo:

Converter sem parecer venda agressiva.

Não usar:

- compre agora;
- últimas unidades;
- promoção;
- imperdível.

Usar:

```text
Agendar uma conversa privada
```

ou

```text
Conhecer os empreendimentos
```

---

### 11 — Footer

Elementos:

- FVS Incorporações;
- endereço;
- WhatsApp;
- e-mail;
- redes sociais;
- links institucionais;
- copyright.

---

## 10. REQUISITOS FUNCIONAIS

### RF-001
O site deve abrir corretamente em desktop, tablet e mobile.

### RF-002
O site deve possuir navegação suave entre seções.

### RF-003
O botão de contato deve direcionar para WhatsApp ou formulário.

### RF-004
A seção de empreendimentos deve apresentar os projetos principais.

### RF-005
As imagens devem estar organizadas em `/assets/images`.

### RF-006
O site deve ser publicável diretamente pela Vercel.

### RF-007
O site deve funcionar sem backend.

### RF-008
O site deve funcionar sem npm install.

### RF-009
O site deve possuir SEO básico no HTML.

### RF-010
O site deve possuir estrutura semântica correta.

---

## 11. REQUISITOS NÃO FUNCIONAIS

### RNF-001
O site deve carregar rápido.

### RNF-002
O HTML deve ser limpo e semântico.

### RNF-003
O CSS deve ser organizado por seções.

### RNF-004
O JavaScript deve ser mínimo.

### RNF-005
Não utilizar bibliotecas externas pesadas.

### RNF-006
Não criar complexidade desnecessária.

### RNF-007
O visual deve parecer premium.

### RNF-008
O site não pode parecer template genérico.

### RNF-009
O site não pode parecer SaaS.

### RNF-010
O site deve ser fácil de editar por IA.

---

## 12. CRITÉRIOS DE ACEITE VISUAL

Cada seção deve ser aprovada somente se responder sim para:

1. Parece premium?
2. Parece editorial?
3. Parece uma incorporadora de alto padrão?
4. Parece inspirado no Springs Estate?
5. Tem respiro suficiente?
6. A imagem domina a experiência?
7. O texto é curto e forte?
8. A hierarquia visual é clara?
9. Existe desejo?
10. Existe sofisticação silenciosa?

Se qualquer resposta for não, a seção deve ser revisada.

---

## 13. CRITÉRIOS DE ACEITE TÉCNICO

Antes de cada commit:

- HTML válido;
- CSS sem classes mortas excessivas;
- JS sem erro no console;
- imagens carregando;
- links funcionando;
- responsivo;
- sem scroll horizontal;
- commit limpo;
- push para GitHub;
- deploy verde na Vercel.

---

## 14. MOTION SYSTEM

Usar animações leves, sem exagero.

Permitido:

- fade-in;
- reveal on scroll;
- parallax leve;
- transições de opacidade;
- movimento lento de imagem.

Proibido:

- animações rápidas;
- efeitos chamativos;
- movimentos de startup;
- carrosséis agressivos;
- popups invasivos.

Valores sugeridos:

```css
--motion-fast: 300ms;
--motion-normal: 600ms;
--motion-slow: 1200ms;
--motion-cinematic: 1800ms;
```

Easing:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

---

## 15. SEO BÁSICO

O `index.html` deve conter:

```html
<title>FVS Incorporações | Imóveis de Alto Padrão em Gramado</title>
<meta name="description" content="FVS Incorporações desenvolve residências de alto padrão em Gramado, unindo arquitetura, conforto, permanência e valor patrimonial.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="FVS Incorporações">
<meta property="og:description" content="Residências pensadas para viver Gramado com conforto, permanência e valor patrimonial.">
<meta property="og:type" content="website">
```

---

## 16. BOAS PRÁTICAS DE HTML

Usar tags semânticas:

```html
<header>
<main>
<section>
<article>
<footer>
<nav>
```

Evitar:

```html
<div>
<div>
<div>
<div>
```

sem necessidade.

---

## 17. BOAS PRÁTICAS DE CSS

Organizar o CSS assim:

```css
/* 01. Variables */
/* 02. Reset */
/* 03. Base */
/* 04. Typography */
/* 05. Header */
/* 06. Hero */
/* 07. Sections */
/* 08. Projects */
/* 09. Gallery */
/* 10. CTA */
/* 11. Footer */
/* 12. Responsive */
```

---

## 18. BOAS PRÁTICAS DE JAVASCRIPT

O `script.js` deve conter apenas:

- menu mobile;
- animações simples de scroll;
- smooth scroll;
- pequenas interações.

Não criar lógica complexa.

---

## 19. COMANDOS GIT OFICIAIS

Após alterações:

```bash
git status
git add index.html style.css script.js assets docs FVS_HTML_MASTER_SPEC.md README.md
git commit -m "Implement static FVS HTML structure"
git push
```

---

## 20. ORDEM DE IMPLEMENTAÇÃO

### Etapa 1
Criar estrutura:

```text
index.html
style.css
script.js
assets/
docs/
```

### Etapa 2
Criar Header e Hero.

### Etapa 3
Validar na Vercel.

### Etapa 4
Criar Manifesto e Gramado.

### Etapa 5
Criar Experiência de Morar.

### Etapa 6
Criar Empreendimentos.

### Etapa 7
Criar Galeria.

### Etapa 8
Criar CTA e Footer.

### Etapa 9
Auditoria visual.

### Etapa 10
Otimização final.

---

## 21. PROMPT OFICIAL PARA CLAUDE CODE

```text
Leia integralmente FVS_HTML_MASTER_SPEC.md.

Este projeto será refeito em HTML, CSS e JavaScript puro.

Não utilizar Next.js.
Não utilizar React.
Não utilizar Tailwind.
Não utilizar npm.
Não utilizar localhost como validação obrigatória.

Objetivo:
Criar um site institucional premium da FVS Incorporações, inspirado exclusivamente em https://springs.estate/.

Primeira tarefa:
Criar somente a estrutura base:

- index.html
- style.css
- script.js
- README.md
- assets/images
- assets/videos
- assets/icons
- docs

Depois implementar apenas Header e Hero.

Não criar a Home completa de uma vez.

Ao finalizar, mostrar:
1. arquivos criados;
2. estrutura de diretórios;
3. checklist de conformidade;
4. próximos passos.
```

---

## 22. DEFINITION OF DONE

Uma etapa só pode ser considerada concluída quando:

- código está limpo;
- visual está aprovado;
- responsivo;
- deploy Vercel está verde;
- não há erro no console;
- não há arquivo órfão;
- não há desvio da paleta;
- não há fonte fora da especificação;
- não há aparência de template genérico.

---

## 23. REGRA FINAL

Este projeto deve ser simples tecnicamente e sofisticado visualmente.

A complexidade deve estar na direção de arte, não na stack.

A stack deve servir ao visual.

O HTML deve servir à narrativa.

A narrativa deve servir à percepção de luxo da FVS.

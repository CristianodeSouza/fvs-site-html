# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## FVS INCORPORAÇÕES — SITE INSTITUCIONAL

**Stack:** HTML5 + CSS3 + JavaScript Vanilla (Vercel)

**Philosophy:** Premium real estate website. No npm, no build, no backend. Inspired by https://springs.estate/

---

## VERIFICAÇÃO OBRIGATÓRIA

### Regra Máxima
Afirmações sobre existência, implementação, correção ou conformidade **exigem evidência verificável**. Nunca invenção ou suposição.

### Antes de Qualquer Afirmação
1. Ler arquivo real
2. Mostrar trecho relevante (arquivo + linhas)
3. Explicar validação
4. Se não puder verificar: "Não consegui verificar"

### Proibido Sem Evidência
- "100% conforme" / "corrigido" / "implementado" / "removido" / "funcionando"
- Comparações visuais: "100% igual", "match 100%", "idêntico"

### Auditorias Visuais (Obrigatório)
Antes de afirmar conformidade visual:
- Gerar screenshot renderizado
- Comparar item-por-item com referência
- Listar: pontos fortes + fracos + diferenças

Usar escalas de proximidade:
- Muito próximo
- Próximo
- Parcialmente próximo
- Distante

---

## ARQUITETURA

### Estrutura
```
index.html      — 11 seções semânticas + header + footer
style.css       — Design system (variáveis) + componentes BEM
script.js       — Smooth scroll + reveal on scroll
FVS_HTML_MASTER_SPEC.md — Especificação completa
/docs           — DESIGN_SYSTEM.md, MOTION_SYSTEM.md, SEO.md, etc
/assets         — /images, /videos, /icons
```

### Design System (style.css, linhas 1-52)
**CSS Custom Properties:**
- **Cores:** 7 cores apenas
  - `--verde-profundo: #1D281F`
  - `--verde-serra: #2B3A2C`
  - `--pedra: #C2AE8F`
  - `--pedra-clara: #DDD0B8`
  - `--off-white: #F4F0E8`
  - `--branco-quente: #FAF7F0`
  - `--preto-quente: #171713`

- **Tipografia:** Cormorant (display) + Outfit (body), sizes xs-6xl
- **Espaçamento:** --space-xs a --space-3xl
- **Motion:** --motion-fast (300ms) → --motion-cinematic (1800ms), --ease-smooth
- **Breakpoints:** 320px, 768px, 1024px, 1280px

**Regra:** Nenhuma cor, font, ou spacing fora das variáveis.

### Componentes (BEM)
Cada seção usa classes descritivas: `.header__nav`, `.hero__title`, `.manifesto__text`, `.gramado__block`, `.experiencia__content`, `.empreendimento`, `.galeria__item`, `.cta-consultivo__button`, `.footer__grid`.

### Narrativa (11 Seções)
1. Header — Nav discreta
2. Hero — Full-screen, título contemplativo
3. Manifesto — Filosofia FVS, tipografia grande
4. Gramado — 4 blocos (Natureza, Sofisticação, Segurança, Turismo)
5. Experiência — "Não vendemos imóveis, vendemos forma de viver"
6. Empreendimentos — 3 cards (Manhattan, Ernesto 142, Novo)
7. Galeria — Grid 3 colunas, imagens grandes
8. CTA — "Agende uma conversa privada"
9. Footer — Contato, links, copyright

### JavaScript
- Smooth scroll: `a[href^="#"]` → IntersectionObserver
- Reveal on scroll: Fade-in de seções (exceto hero)
- Zero dependências externas

---

## WORKFLOW

### Editar
1. Alterar `index.html`, `style.css`, ou `script.js`
2. Sem npm install, sem build — apenas salve
3. Testar no navegador ou Vercel preview

### Validar Visualmente
1. Gerar screenshot renderizado
2. Auditar visualmente (premium? editorial? luxo silencioso?)
3. Comparar item-por-item com Springs Estate
4. Documentar diferenças

### Commitar
```
git status
git add index.html style.css script.js (+ assets/docs se mudou)
git commit -m "Descrição clara"
git push
```
Vercel publica automaticamente.

### Restrições (Obrigatório)
- ❌ npm install
- ❌ build script
- ❌ Next.js, React, Vue
- ❌ Tailwind, Bootstrap
- ❌ Cores fora da paleta (7 cores)
- ❌ Fontes fora de Cormorant + Outfit
- ❌ Animações agressivas (800ms+ é lenta)
- ❌ Aparência SaaS/startup/dashboard

---

## CRITÉRIOS DE ACEITE VISUAL

Cada seção deve responder SIM:
1. Parece premium?
2. Parece editorial?
3. Parece incorporadora alto padrão?
4. Parece inspirado em Springs Estate?
5. Tem respiro suficiente?
6. Imagem domina?
7. Texto curto e forte?
8. Hierarquia visual clara?
9. Existe desejo?
10. Existe sofisticação silenciosa?

Se NÃO → revisar.

---

## PRÓXIMAS ETAPAS

- Etapa 4: Imagens reais (substituir gradients)
- Etapa 5: Menu mobile
- Etapa 6: Integrações (WhatsApp, Analytics, Pixel)
- Etapa 7: Auditoria visual
- Etapa 8: Otimização

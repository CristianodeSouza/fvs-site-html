# Design System — FVS Incorporações

Documentação do sistema visual do site.

## Paleta Oficial

### Cores Base

```css
--verde-profundo: #1D281F;   /* Primária, fundos, header */
--verde-serra: #2B3A2C;      /* Variação, acentos */
--pedra: #C2AE8F;            /* Secundária, destaques */
--pedra-clara: #DDD0B8;      /* Variação clara */
--off-white: #F4F0E8;        /* Fundos leves */
--branco-quente: #FAF7F0;    /* Branco do projeto */
--preto-quente: #171713;     /* Texto, primário */
```

### Regras de Uso

- ✅ Usar apenas as cores listadas
- ✅ Combinações: verde-profundo + pedra
- ❌ Não criar escalas de cinza
- ❌ Não criar aliases ou variações
- ❌ Não usar preto/branco genérico

## Tipografia

### Display Font: Cormorant Garamond

```css
font-family: 'Cormorant Garamond', serif;
```

**Pesos:** 300, 400, 500, 600, 700

**Usos:**
- Headlines (h1, h2, h3)
- Títulos de seção
- Frases editoriais
- Assinatura visual

**Exemplo:**
```css
h1 {
  font-family: 'Cormorant Garamond';
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}
```

### Body Font: Outfit

```css
font-family: 'Outfit', sans-serif;
```

**Pesos:** 300, 400, 500, 600, 700

**Usos:**
- Menu
- Parágrafos
- Botões
- Legendas
- Informações técnicas

**Exemplo:**
```css
p {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}
```

## Escala de Tamanhos

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.5rem;     /* 24px */
--text-2xl: 2rem;      /* 32px */
--text-3xl: 2.5rem;    /* 40px */
--text-4xl: 3rem;      /* 48px */
--text-5xl: 3.5rem;    /* 56px */
--text-6xl: 4rem;      /* 64px */
```

## Espaçamento

```css
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px */
--space-xl: 3rem;      /* 48px */
--space-2xl: 4rem;     /* 64px */
--space-3xl: 6rem;     /* 96px */
```

## Componentes Básicos

### Botões

```css
.button {
  font-family: 'Outfit';
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid currentColor;
  transition: all var(--motion-normal) var(--ease-smooth);
}

.button:hover {
  background-color: var(--pedra);
  color: var(--branco-quente);
}
```

### Cards

```css
.card {
  background: var(--off-white);
  padding: var(--space-2xl);
  border: none;
  box-shadow: none;
}
```

## Breakpoints

```css
--bp-mobile: 320px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1280px;
```

## Critérios de Aceite Visual

Cada seção deve responder **SIM** para:

1. ✓ Parece premium?
2. ✓ Parece editorial?
3. ✓ Parece uma incorporadora de alto padrão?
4. ✓ Parece inspirado em Springs Estate?
5. ✓ Tem respiro suficiente?
6. ✓ A imagem domina a experiência?
7. ✓ O texto é curto e forte?
8. ✓ A hierarquia visual é clara?
9. ✓ Existe desejo?
10. ✓ Existe sofisticação silenciosa?

Se qualquer resposta for **NÃO**, a seção deve ser revisada.

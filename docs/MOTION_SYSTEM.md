# Motion System — FVS Incorporações

Guia de animações e transições.

## Princípios

A motion deve ser:

- **Leve** — sem exagero
- **Silenciosa** — premium
- **Intencional** — cada movimento tem propósito
- **Rápida** — não cansativa

## Tempos

```css
--motion-fast: 300ms;       /* Hover, small elements */
--motion-normal: 600ms;     /* Transições padrão */
--motion-slow: 1200ms;      /* Seção reveal */
--motion-cinematic: 1800ms; /* Entrada principal */
```

## Easing

```css
--ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
```

Usar este easing em todas as animações para consistência.

## Animações Permitidas

### 1. Fade-in

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn var(--motion-normal) var(--ease-smooth);
}
```

### 2. Reveal on Scroll

```css
.section {
  opacity: 0;
  transition: opacity var(--motion-slow) var(--ease-smooth);
}

.section.visible {
  opacity: 1;
}
```

### 3. Parallax Leve

```css
.parallax {
  transform: translateY(var(--parallax-offset));
  transition: transform var(--motion-normal) linear;
}
```

### 4. Hover Effects

```css
a {
  transition: color var(--motion-normal) var(--ease-smooth);
}

a:hover {
  color: var(--pedra);
}
```

### 5. Transição de Opacidade

```css
.fade-transition {
  transition: opacity var(--motion-normal) var(--ease-smooth);
}
```

## Animações Proibidas

❌ Animações rápidas (< 200ms)
❌ Efeitos chamativos (bounce, shake)
❌ Movimentos de startup (flip, rotate)
❌ Carrosséis agressivos
❌ Pop-ups invasivos

## Exemplos de Implementação

### Botão com Hover

```css
.button {
  transition: all var(--motion-normal) var(--ease-smooth);
}

.button:hover {
  transform: translateY(-2px);
  color: var(--pedra);
}
```

### Seção com Scroll Reveal

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.section').forEach(el => {
  observer.observe(el);
});
```

## Checklist de Motion

- ✓ Todas as transições usam `--ease-smooth`
- ✓ Tempos respeitam as variáveis
- ✓ Sem animações acima de 2s (exceto entrada)
- ✓ Sem movimento em mobile (considerar performance)
- ✓ Sem efeitos que atrapalhem leitura
- ✓ Hover effects suaves

## Performance

- Usar `transform` e `opacity` em animações
- Evitar animar `width`, `height`, `position`
- Testar em mobile antes de mesclar
- Desativar motion em `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

# Acceptance Criteria — FVS Incorporações

Critérios de aceite para cada etapa.

## Checklist Visual

Cada seção deve responder **SIM** para todos:

### Qualidade Premium

- [ ] 1. Parece premium?
- [ ] 2. Parece editorial?
- [ ] 3. Parece uma incorporadora de alto padrão?
- [ ] 4. Parece inspirado em Springs Estate?

### Espaço e Composição

- [ ] 5. Tem respiro suficiente?
- [ ] 6. A imagem domina a experiência?
- [ ] 7. O texto é curto e forte?
- [ ] 8. A hierarquia visual é clara?

### Emoção

- [ ] 9. Existe desejo?
- [ ] 10. Existe sofisticação silenciosa?

**Resultado:** Se todos forem SIM → Aprovado. Se qualquer um for NÃO → Revisar.

---

## Checklist Técnico

Antes de cada commit:

### HTML

- [ ] HTML válido (W3C)
- [ ] Sem erros de sintaxe
- [ ] Tags semânticas corretas
- [ ] Atributos obrigatórios preenchidos
- [ ] Meta tags presentes
- [ ] SEO básico implementado

### CSS

- [ ] CSS válido
- [ ] Sem classes mortas
- [ ] Variáveis usadas corretamente
- [ ] Paleta respeitada
- [ ] Tipografia correta
- [ ] Sem estilos conflitantes

### JavaScript

- [ ] Sem erros no console
- [ ] Sem warnings
- [ ] Interações funcionam
- [ ] Smooth scroll funciona
- [ ] Menu mobile responsivo

### Assets

- [ ] Imagens carregam
- [ ] Vídeos carregam (se houver)
- [ ] Ícones aparecem
- [ ] Sem 404 de recursos

### Responsividade

- [ ] Desktop (1280px+)
- [ ] Tablet (768px-1024px)
- [ ] Mobile (320px-767px)
- [ ] Sem scroll horizontal
- [ ] Touch-friendly

### Performance

- [ ] Carregamento < 3s
- [ ] Lighthouse > 90
- [ ] Imagens otimizadas
- [ ] CSS minificado (opcional)
- [ ] JS minificado (opcional)

### Links

- [ ] Todos funcionam
- [ ] Sem broken links
- [ ] Âncoras funcionam
- [ ] URLs amigáveis

### Git

- [ ] Commit message clara
- [ ] Nenhum arquivo estranho
- [ ] Sem merge conflicts
- [ ] Código limpo (sem console.log)

### Deploy

- [ ] Push sem erros
- [ ] Vercel deploy verde
- [ ] URL acessível
- [ ] Visual confere na Vercel

---

## Definition of Done por Etapa

### Etapa 1 — Estrutura Base

```
[ ] index.html criado
[ ] style.css com variáveis
[ ] script.js com interações básicas
[ ] README.md documentado
[ ] assets/ com subpastas
[ ] docs/ com arquivo de spec
[ ] Todos os arquivos commitados
[ ] Vercel publicando
```

**Resultado:** Estrutura pronta, sem conteúdo visual ainda.

---

### Etapa 2 — Header e Hero

```
[ ] Header visual premium
[ ] Menu discreto
[ ] Logo/nome FVS
[ ] Contato visível
[ ] Hero cinematográfico
[ ] Imagem/vídeo full screen
[ ] Título impactante
[ ] Subtítulo contemplativo
[ ] CTA discreto
[ ] Responsivo (desktop, tablet, mobile)
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy Vercel aprovado
```

**Resultado:** Entrada visual premium.

---

### Etapa 3 — Validação Vercel

```
[ ] URL live
[ ] Visual confere
[ ] Sem erros de carregamento
[ ] Responsivo na Vercel
[ ] Performance aceitável
[ ] Pronto para próxima etapa
```

**Resultado:** Estrutura validada.

---

### Etapa 4 — Manifesto e Gramado

```
[ ] Seção Manifesto implementada
[ ] Copy FVS incorporada
[ ] Seção Gramado implementada
[ ] Temas (clima, natureza, etc)
[ ] Imagens de contexto
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy aprovado
```

**Resultado:** Narrativa contextual.

---

### Etapa 5 — Experiência de Morar

```
[ ] Imagens de vivência
[ ] Elementos (lareira, varanda, café)
[ ] Copy emotiva
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy aprovado
```

**Resultado:** Desejo emocional.

---

### Etapa 6 — Empreendimentos

```
[ ] Cards de projetos
[ ] Manhattan informado
[ ] Ernesto 142 informado
[ ] Novos projetos (placeholder)
[ ] Nome, localização, conceito
[ ] Botões discretos
[ ] Responsivo
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy aprovado
```

**Resultado:** Portfólio estruturado.

---

### Etapa 7 — Galeria

```
[ ] Imagens grandes
[ ] Layout imersivo
[ ] Pouco texto
[ ] Transições suaves
[ ] Responsivo
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy aprovado
```

**Resultado:** Desejo visual.

---

### Etapa 8 — CTA e Footer

```
[ ] CTA consultivo
[ ] Texto não agressivo
[ ] Footer completo
[ ] Informações de contato
[ ] Redes sociais
[ ] Copyright
[ ] Critérios visuais 1-10: SIM
[ ] Checklist técnico 100%
[ ] Deploy aprovado
```

**Resultado:** Conversão discreta.

---

### Etapa 9 — Auditoria Visual

```
[ ] Todas as seções: SIM nos 10 critérios
[ ] Paleta respeitada
[ ] Tipografia consistente
[ ] Motion suave
[ ] Spacing equilibrado
[ ] Imagens de qualidade
[ ] Copy forte
[ ] Inspiração Springs Estate presente
```

**Resultado:** Visual aprovado.

---

### Etapa 10 — Otimização Final

```
[ ] Performance Lighthouse > 90
[ ] Velocidade < 3s
[ ] Imagens otimizadas
[ ] CSS limpo
[ ] JS otimizado
[ ] SEO completo
[ ] Accessibility checked
[ ] Ready for production
```

**Resultado:** Site pronto para publicação final.

---

## Rollback Criteria

Se qualquer um destes for verdadeiro, fazer rollback:

- Quebra responsividade
- Erros graves no console
- Paleta não respeitada
- Visual genérico/template
- Parece SaaS
- Performance degradada
- Links quebrados
- Deploy falhando

---

## Approval Flow

1. Claude Code implementa
2. Visual check (10 critérios)
3. Technical check
4. Git commit
5. Vercel deploy
6. Human approval
7. Próxima etapa


# IMPLEMENTATION_PLAN.md

# Plano Técnico de Implementação — Site FVS

> Este documento é um roteiro de execução para o Codex.
> Antes de modificar qualquer arquivo, executar a auditoria descrita em `AUDITORIA_TECNICA.md`.

## Estratégia

- Não reescrever o projeto.
- Evoluir a arquitetura existente.
- Reutilizar componentes sempre que possível.
- Preservar identidade visual.
- Implementar em pequenas entregas.

---

# Ordem de execução

1. Auditoria técnica
2. Mapeamento do projeto
3. Refatoração da arquitetura
4. Refatoração das páginas
5. Novos componentes
6. Performance
7. SEO
8. Analytics
9. QA

---

# Arquivos prioritários

## app/page.tsx

**Objetivo**
- Reestruturar a Home.

**Alterações**
- Hero
- Cards dos empreendimentos
- Bloco A FVS
- Bloco confiança
- Bloco Caderno
- CTA final

**Critérios de aceite**
- Home possui uma função principal.
- Máximo dois CTAs principais.
- Manhattan e Ernesto aparecem imediatamente.

**Dependências**
Header, Hero, ProjectCard, Footer.

---

## app/a-fvs/page.tsx

Objetivo:
Criar página institucional.

Alterações:
- História
- Método
- Equipe
- Entregas
- CTA

Critérios:
- Conteúdo institucional removido da Home.
- Responsivo.

---

## app/empreendimentos/page.tsx

Objetivo:
Lista de empreendimentos.

Alterações:
- Organização por status.
- Cards padronizados.

Critérios:
- Status visível.
- CTA específico.

---

## app/empreendimentos/[slug]/page.tsx

Objetivo:
Template reutilizável.

Seções:
1 Hero
2 História
3 Conceito
4 Arquitetura
5 Interiores
6 Materiais
7 Diferenciais
8 Tipologias
9 Plantas
10 Galeria
11 Localização
12 Status/Obra
13 Contato

Critérios:
- Ordem progressiva.
- Seções opcionais.
- CTA depende do status.

---

## app/caderno-fvs/page.tsx

Objetivo:
Listagem editorial.

Critérios:
Categorias, filtros e cards.

---

## app/caderno-fvs/[slug]/page.tsx

Objetivo:
Template de artigo.

Critérios:
SEO, relacionados, autoria, CTA discreto.

---

## app/contato/page.tsx

Objetivo:
Centralizar contato.

Critérios:
Formulário validado.
WhatsApp contextualizado.

---

# Componentes

## components/Header.tsx

Alterar:
- Novo menu.
- Página ativa.
- Mobile.

Aceite:
Menu consistente.

---

## components/Footer.tsx

Alterar:
Rodapé conforme PRD.

---

## components/Hero.tsx

Alterar:
Imagem hero.
Título.
CTA.

---

## components/ProjectCard.tsx

Campos:
Status
Imagem
Descrição
CTA

---

## components/Gallery.tsx

Adicionar:
Categorias
Lazy loading
Lightbox
Swipe
Indicador

---

## components/FloorPlanViewer.tsx

Novo.

---

## components/MaterialCard.tsx

Novo.

---

## components/InteriorGallery.tsx

Novo.

---

## components/ConstructionTimeline.tsx

Novo.

---

## components/TeamCard.tsx

Novo.

---

## components/ArticleCard.tsx

Novo.

---

## components/CTAButton.tsx

Padronizar estados.

---

## components/StatusBadge.tsx

Novo.

---

# Conteúdo

Criar estrutura para:

- projetos
- artigos
- equipe
- materiais
- atualizações de obra

Nunca hardcode quando puder reutilizar dados.

---

# Analytics

Adicionar eventos descritos no PRD.

---

# Performance

- Lazy loading
- Otimização imagens
- Split de componentes
- Lighthouse

---

# Definition of Done

Cada arquivo só pode ser finalizado quando:

- atende PRD
- atende README
- testado desktop
- testado mobile
- sem regressão
- documentado

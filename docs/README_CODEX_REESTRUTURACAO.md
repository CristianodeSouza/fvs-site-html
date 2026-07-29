# README_Codex.md

# Projeto de Reestruturação do Site FVS

> Documento de orientação para o Codex.
>
> Este arquivo deve ser lido **antes de qualquer alteração no código**.

---

# Objetivo do projeto

O objetivo deste projeto **não é criar um novo site**.

O objetivo é reorganizar a arquitetura da informação, a jornada do usuário e a experiência de navegação do site atual da FVS, preservando sua identidade visual e posicionamento.

A implementação deve permanecer fiel às diretrizes do documento **"Síntese Usabilidade e Interação para o site FVS"**.

---

# Ordem obrigatória de leitura

O Codex deve seguir exatamente esta ordem:

1. **README_Codex.md** (este documento)
2. **PRD_Reestruturacao_Site_FVS.md**
3. **Usabilidade e Interação Site FVS.pdf**
4. Código existente

---

# Fonte de verdade

A prioridade para tomada de decisão é:

1. PRD_Reestruturacao_Site_FVS.md
2. PDF original de usabilidade
3. Código existente

Se houver conflito entre código e PRD, o PRD prevalece.

Se houver conflito entre PRD e PDF, o Codex deve interromper a implementação e listar a divergência para decisão humana.

Nunca assumir comportamento não descrito.

---

# O que NÃO é permitido

Nunca:

- alterar identidade visual da marca sem necessidade;
- inventar textos;
- inventar histórias;
- inventar datas;
- inventar cronogramas;
- inventar percentuais de obra;
- inventar dados técnicos;
- inventar nomes de profissionais;
- remover páginas existentes sem mapear impactos;
- quebrar URLs existentes sem redirects.

---

# Filosofia de implementação

Antes de criar qualquer componente novo:

1. Auditar componentes existentes.
2. Reutilizar componentes sempre que possível.
3. Refatorar apenas quando necessário.
4. Manter consistência visual.

A prioridade é evolução, não reescrita.

---

# Fluxo obrigatório

1. Auditar o projeto.
2. Mapear rotas.
3. Mapear componentes.
4. Mapear fontes de conteúdo.
5. Mapear integrações.
6. Criar plano técnico.
7. Implementar por etapas.
8. Testar.
9. Gerar relatório.

Nenhuma implementação direta deve ocorrer antes da auditoria.

---

# Estratégia de desenvolvimento

Implementar em pequenas entregas:

## Sprint 1
- Arquitetura
- Menu
- Home
- A FVS

## Sprint 2
- Empreendimentos
- Manhattan
- Ernesto 142

## Sprint 3
- Caderno FVS
- Contato
- Confiança

## Sprint 4
- Performance
- SEO
- Analytics
- QA

Cada sprint deve terminar com aplicação funcional e estável.

---

# Boas práticas obrigatórias

- Não duplicar código.
- Não quebrar componentes compartilhados.
- Criar componentes reutilizáveis.
- Priorizar acessibilidade.
- Priorizar mobile.
- Otimizar imagens.
- Evitar JavaScript desnecessário.
- Preservar URLs.

---

# Relatório após cada etapa

Ao concluir uma etapa, apresentar:

## Arquivos alterados

Lista completa.

## Componentes criados

Lista completa.

## Componentes reutilizados

Lista completa.

## Critérios de aceite atendidos

Relacionar item por item do PRD.

## Pendências

Itens ainda não implementados.

## Riscos

Possíveis impactos técnicos.

---

# Quando parar e pedir validação

Interromper a implementação quando:

- houver conflito entre PRD e código;
- faltar conteúdo aprovado;
- houver risco de perda de SEO;
- houver necessidade de alterar estrutura de dados;
- houver dúvida sobre arquitetura.

Nunca tomar decisões estratégicas silenciosamente.

---

# Definition of Done

Uma tarefa só está concluída quando:

- Implementada.
- Testada.
- Responsiva.
- Acessível.
- Sem erros de console.
- Sem regressões.
- Com critérios de aceite atendidos.
- Documentada.

---

# Objetivo final

Entregar um site que seja:

- simples para navegar;
- sofisticado para perceber;
- objetivo para converter;

preservando a identidade da FVS e respeitando integralmente o PRD e o PDF de referência.

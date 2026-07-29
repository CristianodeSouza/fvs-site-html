# Relatorio Fase 1 - Fundacao Sem Redesenho

**Projeto:** FVS Site HTML  
**Data:** 2026-07-29  
**Base:** `docs/AUDITORIA_ATUAL_SITE_FVS.md`  
**Objetivo:** iniciar a fundacao tecnica da reestruturacao sem alterar layout, identidade visual ou URLs.

---

## 1. Escopo Executado

Esta etapa implementou uma camada inicial de mensuracao da jornada do usuario, alinhada ao PRD, sem modificar a apresentacao visual do site.

Eventos adicionados no `script.js`:

- `click_whatsapp`
- `click_social`
- `click_email`
- `click_phone`
- `click_project_card`
- `click_primary_cta`
- `click_navigation`
- `open_gallery`
- `navigate_gallery`

Os eventos usam a tag GA4 ja instalada no site: `G-MDV4CSW4RK`.

---

## 2. Arquivos Alterados

| Arquivo | Mudanca |
| --- | --- |
| `script.js` | Criada camada centralizada de tracking GA4 para links, CTAs, menu, cards de empreendimento e galeria |
| `docs/RELATORIO_FASE_1_FUNDACAO.md` | Registro desta etapa no repositorio |
| `docs/README.md` | Indice atualizado com o relatorio da fase |

---

## 3. Componentes / Blocos Cobertos

| Bloco | Evento |
| --- | --- |
| Menu superior e menu expandido | `click_navigation` |
| Footer | `click_navigation`, `click_email`, `click_phone`, `click_social`, `click_whatsapp` |
| Cards Manhattan e Ernesto | `click_project_card` |
| CTA consultivo | `click_whatsapp` ou `click_primary_cta`, conforme destino |
| Galerias Manhattan e Ernesto | `open_gallery`, `navigate_gallery` |
| Instagram | `click_social` |
| Email | `click_email` |
| Telefone | `click_phone` |

---

## 4. Parametros Enviados

Quando aplicavel, os eventos enviam:

- `page_path`
- `page_title`
- `cta_label`
- `cta_position`
- `project_slug`
- `destination`
- `gallery_title`
- `image_index`
- `image_path`
- `image_alt`
- `navigation_area`
- `navigation_direction`

Regra de privacidade: o script nao envia dados pessoais de usuario. Para links de WhatsApp, nao envia a query completa da mensagem como parametro.

---

## 5. Validacoes

| Validacao | Resultado |
| --- | --- |
| `node --check script.js` | OK |
| Eventos presentes no arquivo | OK |
| Alteracao visual | Nao houve |
| URLs | Preservadas |
| Sitemap/robots | Nao alterados |

---

## 6. Criterios Do PRD Atendidos Nesta Etapa

- Preparar medicao antes e depois das alteracoes.
- Medir cliques em cards de empreendimento.
- Medir CTAs.
- Medir WhatsApp.
- Medir interacao com galeria.
- Nao enviar dados pessoais ao analytics.
- Preservar identidade visual.
- Preservar URLs.

---

## 7. Pendencias

Esta etapa nao resolve ainda:

- Criacao de pagina `/a-fvs`.
- Criacao de pagina `/contato`.
- Criacao do `Caderno FVS`.
- Dados estruturados JSON-LD.
- Otimizacao de video e imagens pesadas.
- Consolidacao real de header/menu/footer em componente unico.
- QA visual mobile por screenshots.

---

## 8. Proximo Passo Recomendado

Executar a segunda entrega da Fase 1:

1. Padronizar manualmente header, menu expandido e footer entre as 5 paginas atuais.
2. Revisar nomenclatura do menu para ficar consistente com a arquitetura definida.
3. Preparar mapa de URLs futuras sem quebrar as rotas atuais.
4. Registrar tudo em novo relatorio antes de alterar a Home.

# PRD — Reestruturação de Usabilidade e Interação do Site FVS

**Projeto:** Evolução do site institucional e comercial da FVS  
**Site:** `https://fvsinc.com.br/`  
**Documento-base:** “Síntese Usabilidade e Interação para o site FVS”  
**Objetivo de uso:** Implementação no Codex, com o projeto do site já aberto  
**Data:** julho de 2026  
**Status:** Pronto para planejamento técnico e execução

---

# 1. Objetivo deste documento

Este documento transforma as diretrizes do PDF “Síntese Usabilidade e Interação para o site FVS” em uma especificação completa de produto para implementação.

O propósito não é redesenhar o site com base em preferências subjetivas, mas traduzir em requisitos claros os princípios, a arquitetura, os fluxos e as referências apresentadas no documento original.

A implementação deve conduzir o usuário com clareza para três objetivos principais:

1. Conhecer a FVS.
2. Avaliar um empreendimento.
3. Iniciar uma conversa.

Todo requisito deste PRD deve ser interpretado à luz desses três objetivos.

---

# 2. Restrições e premissas

## 2.1. Fonte de verdade

As decisões de produto deste documento são baseadas exclusivamente nas recomendações do PDF.

As referências mencionadas no PDF exercem funções diferentes:

- **Kopstein:** estrutura, navegação e organização dos empreendimentos.
- **Woss:** território, histórias e conteúdo editorial.
- **Wentz:** materiais, direção visual e valor percebido.
- **Isay Weinfeld:** arquitetura, interiores e curadoria visual.

A implementação não deve copiar visualmente essas referências. Deve utilizar apenas os princípios descritos no documento.

## 2.2. Não inventar informações

Não devem ser publicados:

- datas de entrega não oficiais;
- percentuais de obra não validados;
- nomes de responsáveis sem autorização;
- dados técnicos sem documentação;
- informações sobre materiais sem confirmação;
- números de desempenho térmico, acústico ou estrutural sem fonte;
- promessas comerciais não aprovadas;
- empreendimentos entregues sem validação;
- histórias de endereços sem pesquisa e aprovação.

Quando não houver conteúdo disponível, o sistema deve utilizar placeholders administrativos ou ocultar a seção até que o conteúdo seja aprovado.

## 2.3. Preservação da identidade FVS

A mudança deve preservar:

- identidade visual existente;
- paleta de cores;
- tipografia oficial;
- posicionamento da marca;
- tom sofisticado;
- narrativa relacionada a Gramado;
- diferenciação entre Manhattan Residence e Ernesto 142.

A reestruturação é principalmente de:

- arquitetura da informação;
- ordem do conteúdo;
- hierarquia;
- navegação;
- curadoria visual;
- clareza dos CTAs;
- confiança;
- experiência mobile;
- consistência funcional.

---

# 3. Problema de produto

O site atual possui boa base visual e narrativa, porém concentra funções institucionais, comerciais e editoriais na mesma jornada.

Os principais problemas que devem ser corrigidos são:

1. Excesso de funções concentradas na Home.
2. Separação insuficiente entre institucional, empreendimentos e conteúdo editorial.
3. Ausência de uma estrutura editorial denominada Caderno FVS.
4. Falta de organização dos empreendimentos por status.
5. Falta de uma jornada progressiva consistente dentro das páginas de empreendimentos.
6. Galerias extensas ou sem categorização clara.
7. Interiores, arquitetura, materiais, plantas e galeria sem separação suficientemente explícita.
8. Informações de confiança pouco materializadas em evidências.
9. CTAs que podem ser mais específicos conforme o contexto.
10. Necessidade de experiência mobile mais controlada e previsível.
11. Necessidade de consistência visual e funcional entre páginas.

---

# 4. Princípios obrigatórios de implementação

## 4.1. Uma função principal por página

Cada página deve possuir um objetivo dominante.

Exemplos:

- Home: apresentar a FVS e direcionar para os empreendimentos.
- A FVS: apresentar empresa, história, equipe, método e entregas.
- Empreendimentos: permitir localizar e avaliar projetos.
- Página de empreendimento: apresentar o projeto e conduzir para contato.
- Caderno FVS: oferecer conteúdo editorial.
- Contato: iniciar uma conversa.

Não concentrar toda a narrativa institucional, comercial e editorial na Home.

## 4.2. Hierarquia imediata

Nos primeiros elementos visíveis de cada página, o usuário deve identificar:

- onde está;
- qual é o conteúdo principal;
- qual é o status, quando aplicável;
- qual é a proposta de valor;
- qual é a próxima ação.

## 4.3. Encantamento antes do conteúdo técnico

A jornada deve priorizar:

1. história;
2. conceito;
3. arquitetura;
4. interiores;
5. materiais;
6. atmosfera;
7. valor percebido;

e somente depois:

8. tipologias;
9. metragens;
10. ficha técnica;
11. plantas;
12. disponibilidade;
13. detalhes complementares.

Isso não exige uma galeria completa no topo. Pode ser atendido com uma imagem hero, uma sequência visual curta e conteúdo editorial bem organizado.

## 4.4. Informação progressiva

Apresentar o essencial primeiro.

Detalhes técnicos e conteúdos complementares devem surgir conforme o interesse aumenta.

Utilizar:

- seções organizadas;
- âncoras;
- accordions quando necessário;
- galerias secundárias;
- modais;
- páginas relacionadas;
- CTAs específicos.

## 4.5. Navegação previsível

O menu deve:

- ser curto;
- ser permanente;
- manter a mesma ordem em todas as páginas;
- identificar a página ativa;
- funcionar igualmente em desktop e mobile;
- evitar mudanças de nomenclatura entre páginas.

## 4.6. Texto escaneável

Todo conteúdo deve utilizar:

- títulos claros;
- subtítulos objetivos;
- parágrafos curtos;
- espaçamento suficiente;
- blocos bem separados;
- largura de linha confortável;
- listas somente quando ajudarem a leitura.

A estética editorial não pode prejudicar a compreensão.

## 4.7. Botões específicos

Evitar botões genéricos como “Saiba mais”.

O botão deve informar claramente o que acontecerá.

Exemplos:

- Conhecer o Manhattan.
- Conhecer o Ernesto 142.
- Agendar uma visita.
- Acompanhar a obra.
- Receber apresentação.
- Ver plantas.
- Explorar os interiores.
- Conhecer os materiais.
- Ler a história do projeto.
- Explorar a localização.
- Falar com a FVS.
- Ler no Caderno FVS.

Cada seção deve ter somente uma ação principal e, quando necessário, uma secundária.

## 4.8. Feedback da interface

A interface deve fornecer retorno visual para:

- página ativa;
- abertura e fechamento do menu;
- carregamento de imagens;
- avanço da galeria;
- envio de formulário;
- erro no formulário;
- sucesso no envio;
- abertura de WhatsApp;
- download ou solicitação de apresentação;
- botões desabilitados;
- carregamentos assíncronos.

## 4.9. Confiança antes da conversão

O site deve apresentar evidências de confiança por meio de:

- entregas;
- andamento de obras;
- endereços;
- equipe;
- autoria;
- imagens reais;
- informações atualizadas;
- status claramente visível;
- dados oficiais.

## 4.10. Prioridade para celular

Toda entrega deve ser validada primeiro em mobile.

Requisitos mínimos:

- áreas de toque adequadas;
- textos legíveis;
- CTAs acessíveis;
- imagens otimizadas;
- menu funcional;
- nenhum elemento bloqueando a navegação;
- galerias utilizáveis por toque;
- carregamento progressivo;
- ausência de overflow horizontal.

## 4.11. Consistência visual e funcional

Os mesmos padrões devem ser mantidos em todas as páginas:

- cores;
- fontes;
- botões;
- estados;
- espaçamentos;
- grids;
- comportamento de cards;
- comportamento de galerias;
- feedbacks;
- títulos;
- CTAs;
- rodapé;
- menu.

---

# 5. Arquitetura da informação

## 5.1. Menu principal

Implementar o menu principal com a seguinte estrutura:

1. Início
2. A FVS
3. Empreendimentos
4. Caderno FVS
5. Contato

## 5.2. Submenu de Empreendimentos

O item “Empreendimentos” deve permitir acesso a:

- Manhattan Residence
- Ernesto 142
- Entregues

Caso existam mais projetos, o submenu deve suportar organização por status.

## 5.3. Estrutura do Caderno FVS

Categorias:

- Histórias
- Arquitetura e Interiores
- Materiais, Sustentabilidade e Tecnologias
- Gramado e Serra
- Mercado e Patrimônio
- Obras e Construção

## 5.4. Rodapé

O rodapé deve ser reorganizado com:

- FVS;
- A FVS;
- empreendimentos;
- Manhattan Residence;
- Ernesto 142;
- entregues;
- Caderno FVS;
- categorias editoriais;
- contato;
- endereço;
- território;
- redes sociais;
- newsletter, caso implementada;
- política de privacidade;
- termos;
- créditos.

---

# 6. Fluxo principal do usuário

O fluxo recomendado deve ser:

**Home → Empreendimento → História, conceito e atmosfera → Arquitetura, interiores e materiais → Informações técnicas → Galeria e plantas → Localização → Contato**

O sistema deve permitir que o usuário avance e também acesse diretamente seções específicas por meio de âncoras ou navegação interna.

---

# 7. Requisitos da Home

## 7.1. Objetivo da Home

A Home deve:

- apresentar a FVS;
- comunicar o posicionamento;
- apresentar os empreendimentos;
- permitir o início rápido da jornada.

Não deve funcionar como uma página que contém todo o conteúdo institucional e editorial do site.

## 7.2. Estrutura recomendada

### Seção 1 — Hero

Conteúdo:

- imagem ou composição visual de alto impacto;
- título principal;
- texto curto;
- CTA principal;
- CTA secundário opcional.

Critérios:

- comunicar a proposta de valor sem texto excessivo;
- não utilizar mais de dois CTAs;
- evitar rotação automática agressiva;
- carregar rapidamente;
- manter legibilidade sobre a imagem.

### Seção 2 — Empreendimentos em destaque

Exibir cards para:

- Manhattan Residence;
- Ernesto 142.

Cada card deve apresentar:

- nome;
- endereço ou região;
- status;
- imagem;
- descrição curta;
- CTA específico.

Exemplos:

- Conhecer o Manhattan.
- Conhecer o Ernesto 142.

### Seção 3 — Apresentação breve da FVS

Conteúdo resumido:

- quem é a FVS;
- atuação;
- proposta;
- relação com Gramado.

CTA:

- Conhecer a FVS.

### Seção 4 — Evidência de confiança

Exibir somente evidências validadas:

- empreendimento entregue;
- atualização de obra;
- equipe;
- endereço;
- imagem real;
- autoria.

CTA conforme conteúdo:

- Ver empreendimentos entregues.
- Acompanhar a obra.
- Conhecer a equipe.

### Seção 5 — Caderno FVS

Exibir de dois a quatro conteúdos recentes.

Cada card deve apresentar:

- categoria;
- título;
- imagem;
- resumo curto;
- autoria ou data;
- CTA “Ler no Caderno FVS”.

### Seção 6 — Contato

Bloco final simples.

Conteúdo:

- convite para conversa;
- canal principal;
- CTA “Falar com a FVS”.

## 7.3. Critérios de aceite da Home

- [ ] A Home não replica todo o conteúdo da página A FVS.
- [ ] A Home não contém textos editoriais completos.
- [ ] Manhattan e Ernesto aparecem claramente.
- [ ] Cada empreendimento possui status visível.
- [ ] Os CTAs são específicos.
- [ ] O usuário consegue chegar a um empreendimento em um clique.
- [ ] O usuário consegue chegar ao contato em um clique.
- [ ] A Home funciona sem overflow em mobile.
- [ ] Nenhum CTA flutuante bloqueia conteúdo.
- [ ] Todas as imagens usam formatos otimizados.
- [ ] Conteúdo editorial aponta para o Caderno FVS.
- [ ] A página ativa é indicada no menu.

## 7.4. Resultado esperado

- Jornada inicial mais clara.
- Menor competição entre conteúdos.
- Acesso mais rápido aos empreendimentos.
- Melhor separação entre institucional, comercial e editorial.
- Maior previsibilidade da navegação.

---

# 8. Requisitos da página “A FVS”

## 8.1. Objetivo

Concentrar o conteúdo institucional da FVS.

## 8.2. Estrutura

### Hero institucional

- título;
- posicionamento;
- imagem;
- breve introdução.

### História da FVS

- origem;
- trajetória;
- relação com Gramado;
- visão da empresa.

### Método FVS

Explicar:

- como os endereços são escolhidos;
- como os projetos são concebidos;
- como arquitetura, interiores e materiais são tratados;
- como a FVS entende permanência, território e valor.

### Equipe e autoria

Exibir, quando autorizado:

- nome;
- função;
- foto;
- breve biografia;
- participação;
- arquitetos;
- parceiros;
- responsáveis.

### Entregas e histórico

Exibir:

- empreendimentos entregues;
- data;
- localização;
- imagens reais;
- autoria;
- CTA.

### Confiança

Concentrar evidências verificáveis:

- informações atualizadas;
- endereços;
- entregas;
- obras;
- responsáveis;
- imagens reais.

### Contato

CTA:

- Falar com a FVS.

## 8.3. Critérios de aceite

- [ ] A página possui objetivo institucional claro.
- [ ] A equipe só é publicada com dados aprovados.
- [ ] Não há nomes fictícios.
- [ ] Entregas utilizam imagens e dados reais.
- [ ] O conteúdo está dividido em seções escaneáveis.
- [ ] O método não é repetido integralmente na Home.
- [ ] Há CTA para contato.
- [ ] Há link para os empreendimentos.
- [ ] A página é responsiva.

## 8.4. Resultado esperado

- Materialização da identidade institucional.
- Maior confiança.
- Redução da sobrecarga da Home.
- Melhor compreensão sobre quem está por trás dos projetos.

---

# 9. Requisitos da página “Empreendimentos”

## 9.1. Objetivo

Permitir que o usuário identifique e compare os empreendimentos pela situação atual.

## 9.2. Organização por status

Criar agrupamentos como:

- Em lançamento.
- Em obras.
- Disponíveis.
- Entregues.

Usar somente os status aplicáveis.

## 9.3. Card de empreendimento

Cada card deve apresentar:

- nome;
- status;
- endereço;
- autoria, quando relevante;
- faixa de metragem, quando validada;
- imagem principal;
- descrição curta;
- CTA.

## 9.4. Critérios de aceite

- [ ] Status visível em todos os cards.
- [ ] Cards possuem padrão visual único.
- [ ] Imagens não apresentam proporções inconsistentes.
- [ ] Cada card possui somente um CTA principal.
- [ ] O usuário consegue distinguir projetos atuais e entregues.
- [ ] A página suporta a inclusão de novos empreendimentos.
- [ ] Filtros só devem ser adicionados se houver quantidade suficiente de projetos.
- [ ] O layout funciona em mobile.

## 9.5. Resultado esperado

- Melhor compreensão do portfólio.
- Mais confiança.
- Menor esforço para encontrar um projeto.
- Estrutura escalável.

---

# 10. Template de página de empreendimento

Este template deve ser reutilizável para Manhattan Residence, Ernesto 142 e futuros projetos.

A renderização deve variar conforme o status do empreendimento.

---

## 10.1. Seção 1 — Hero do empreendimento

Conteúdo obrigatório:

- nome;
- endereço;
- status;
- proposta de valor;
- imagem principal;
- CTA principal.

CTA por status:

- Disponível: Agendar uma visita.
- Em lançamento: Receber apresentação.
- Em obras: Acompanhar a obra.
- Entregue: Conhecer o projeto.

CTA secundário possível:

- Falar com a FVS.

Critérios de aceite:

- [ ] Nome visível sem rolagem.
- [ ] Status visível sem rolagem.
- [ ] CTA visível sem rolagem, sempre que possível.
- [ ] Imagem otimizada.
- [ ] Texto legível.
- [ ] No máximo dois CTAs.
- [ ] Mobile validado.

---

## 10.2. Seção 2 — História do endereço

Título recomendado:

**A história do endereço**

Conteúdo:

- memória do local;
- relevância do terreno;
- relação com o bairro;
- relação com Gramado;
- elementos que influenciaram o projeto.

Regras:

- conteúdo factual;
- não inventar histórias;
- citar autoria quando houver;
- usar imagens históricas somente com direito de uso;
- permitir ausência da seção até o conteúdo estar aprovado.

Critérios de aceite:

- [ ] A seção está antes da ficha técnica.
- [ ] O texto é escaneável.
- [ ] O conteúdo não é comercial excessivo.
- [ ] Há conexão clara entre endereço e projeto.
- [ ] Imagens possuem texto alternativo.
- [ ] A seção pode ser ocultada via configuração.

Resultado esperado:

- Maior vínculo entre território, memória e arquitetura.
- Diferenciação da FVS.
- Construção de valor antes dos dados técnicos.

---

## 10.3. Seção 3 — Conceito e atmosfera

Conteúdo:

- conceito do projeto;
- intenção arquitetônica;
- proposta de vida;
- relação entre espaço, luz, circulação e permanência;
- atmosfera.

Critérios de aceite:

- [ ] Texto curto e dividido.
- [ ] Imagens reforçam o conceito.
- [ ] Não repetir integralmente a Home.
- [ ] Não antecipar ficha técnica completa.
- [ ] Há respiro visual.

Resultado esperado:

- Compreensão do projeto antes da avaliação técnica.
- Aumento do valor percebido.

---

## 10.4. Seção 4 — Arquitetura

Conteúdo:

- autoria;
- implantação;
- fachada;
- volumetria;
- circulação;
- relação com o entorno;
- soluções arquitetônicas relevantes.

Critérios de aceite:

- [ ] Autoria exibida quando validada.
- [ ] Imagens organizadas.
- [ ] Conteúdo não é apenas adjetivação.
- [ ] Soluções técnicas são explicadas de forma compreensível.
- [ ] Não há dados não confirmados.

---

## 10.5. Seção 5 — Interiores

Interiores devem ser tratados como parte da arquitetura, não apenas decoração.

Conteúdo possível:

- living;
- jantar;
- cozinha;
- suítes;
- banheiros;
- iluminação;
- circulação;
- mobiliário;
- materialidade;
- atmosfera.

Regras de curadoria:

- usar somente imagens relevantes;
- não repetir ângulos;
- separar interiores de fachada, garagem e plantas;
- organizar por ambiente;
- priorizar imagens de alta qualidade;
- usar tipografia discreta.

CTA recomendado:

- Explorar os interiores.

Critérios de aceite:

- [ ] Existe seção específica.
- [ ] Imagens possuem categoria ou legenda.
- [ ] Não há plantas misturadas.
- [ ] Não há excesso de imagens simultâneas.
- [ ] A experiência mobile permite navegação por toque.
- [ ] Há indicador de avanço quando usado carrossel.
- [ ] O carregamento é progressivo.

Resultado esperado:

- Maior clareza sobre o produto.
- Melhor percepção de qualidade.
- Separação adequada entre arquitetura e interiores.

---

## 10.6. Seção 6 — Materiais

Materiais devem ser apresentados como parte central do valor do empreendimento.

Para cada material, quando houver conteúdo validado, apresentar:

- nome;
- imagem aproximada;
- origem, se conhecida;
- textura;
- aplicação;
- desempenho validado;
- durabilidade validada;
- sustentabilidade validada;
- benefício percebido.

Exemplos de benefícios possíveis:

- conforto térmico;
- conforto acústico;
- durabilidade;
- baixa manutenção;
- sensação tátil;
- integração estética;
- eficiência;
- adequação ao clima da Serra.

Regras:

- não inventar números;
- não informar marca sem aprovação;
- não prometer desempenho sem documentação;
- preferir linguagem acessível;
- evitar fichas técnicas extensas na primeira camada.

CTA:

- Conhecer os materiais.

Critérios de aceite:

- [ ] Cada material possui conteúdo aprovado.
- [ ] Benefício é explicado sem exagero.
- [ ] Dados técnicos possuem fonte interna ou laudo.
- [ ] Imagens possuem boa definição.
- [ ] Conteúdo é responsivo.
- [ ] Há possibilidade de link para artigo do Caderno FVS.

Resultado esperado:

- Transformação de especificação em valor percebido.
- Maior diferenciação.
- Melhor entendimento da qualidade.

---

## 10.7. Seção 7 — Diferenciais

Apresentar diferenciais de forma objetiva.

Regras:

- evitar repetir materiais;
- evitar listas genéricas;
- relacionar atributo a benefício;
- limitar a quantidade visível;
- permitir expansão para detalhes.

Critérios de aceite:

- [ ] Diferenciais são reais.
- [ ] Cada item possui título claro.
- [ ] Não há excesso de texto.
- [ ] Ícones seguem padrão visual.
- [ ] Não há promessas não comprovadas.

---

## 10.8. Seção 8 — Tipologias e informações técnicas

Conteúdo possível:

- metragens;
- quantidade de dormitórios;
- suítes;
- vagas;
- unidades;
- áreas;
- características técnicas;
- disponibilidade.

Regras:

- utilizar informação validada;
- separar conteúdo editorial de conteúdo técnico;
- apresentar comparações somente quando úteis;
- não expor preço sem aprovação.

Critérios de aceite:

- [ ] Informações conferidas.
- [ ] Unidades de medida padronizadas.
- [ ] Leitura simples.
- [ ] Tabela responsiva.
- [ ] Conteúdo técnico aparece após as camadas de valor.
- [ ] Não há divergência com material comercial oficial.

---

## 10.9. Seção 9 — Plantas

Plantas devem ter seção própria.

Funcionalidades possíveis:

- filtros por tipologia;
- visualização ampliada;
- download, quando autorizado;
- legenda;
- indicação de área;
- identificação de pavimento, se aplicável.

Critérios de aceite:

- [ ] Plantas não estão misturadas à galeria editorial.
- [ ] Ampliação funciona.
- [ ] Imagens possuem resolução suficiente.
- [ ] Download só aparece quando autorizado.
- [ ] Mobile permite zoom ou abertura em tela cheia.
- [ ] Existe identificação da tipologia.

Resultado esperado:

- Melhor avaliação técnica.
- Menor confusão na galeria.
- Informação progressiva.

---

## 10.10. Seção 10 — Galeria completa

A galeria completa pode incluir:

- fachada;
- áreas comuns;
- interiores;
- detalhes;
- entorno;
- obra, quando aplicável.

Não incluir plantas nesta galeria.

Regras:

- curadoria obrigatória;
- categorias;
- ausência de redundância;
- indicador de posição;
- navegação por teclado;
- suporte a toque;
- carregamento lazy;
- legendas.

Critérios de aceite:

- [ ] Fotos organizadas por categoria.
- [ ] Não há imagens duplicadas.
- [ ] Contador exibido.
- [ ] Fechamento do modal acessível.
- [ ] Escape fecha o modal no desktop.
- [ ] Setas funcionam no desktop.
- [ ] Swipe funciona no mobile.
- [ ] Foco do teclado é controlado.
- [ ] O retorno preserva a posição da página.
- [ ] Imagens são otimizadas.

Resultado esperado:

- Curadoria mais sofisticada.
- Menor sobrecarga.
- Melhor navegação visual.

---

## 10.11. Seção 11 — Localização

Conteúdo:

- endereço;
- mapa;
- relação com o bairro;
- distâncias relevantes;
- contexto urbano;
- CTA.

CTA recomendado:

- Explorar a localização.

Critérios de aceite:

- [ ] Endereço validado.
- [ ] Mapa não bloqueia scroll mobile.
- [ ] Carregamento do mapa não prejudica performance inicial.
- [ ] Informações de distância são confirmadas.
- [ ] Existe alternativa textual ao mapa.

---

## 10.12. Seção 12 — Status, obra, disponibilidade ou entrega

A seção deve variar por status.

### Empreendimento em lançamento

Exibir:

- status;
- apresentação;
- previsão oficial, se autorizada;
- imagens;
- CTA para receber material.

### Empreendimento em obras

Exibir:

- data da última atualização;
- imagens reais;
- etapas concluídas;
- próxima etapa, se aprovada;
- percentual, somente se houver metodologia oficial;
- previsão oficial;
- equipe ou responsáveis, quando autorizado;
- histórico de atualizações.

### Empreendimento disponível ou concluído

Exibir:

- imagens reais;
- disponibilidade para visita;
- data de conclusão, se aprovada;
- CTA de agendamento.

### Empreendimento entregue

Exibir:

- data de entrega;
- imagens reais;
- endereço;
- autoria;
- breve histórico.

Critérios de aceite:

- [ ] Conteúdo muda conforme status.
- [ ] Atualizações exibem data.
- [ ] Dados são oficiais.
- [ ] Não há cronograma inventado.
- [ ] Não há percentuais não validados.
- [ ] Imagens reais são identificadas como reais.
- [ ] A seção pode ser atualizada sem alterar código, se houver CMS.

Resultado esperado:

- Maior transparência.
- Redução de incerteza.
- Confiança antes da conversão.

---

## 10.13. Seção 13 — Contato do empreendimento

Conteúdo:

- convite contextual;
- nome do empreendimento;
- formulário ou WhatsApp;
- CTA específico.

Exemplos:

- Agendar uma visita ao Manhattan.
- Receber apresentação do Ernesto 142.
- Falar sobre disponibilidade.
- Solicitar informações.

Critérios de aceite:

- [ ] O empreendimento é identificado no lead.
- [ ] Formulário valida campos.
- [ ] Mensagem de sucesso é exibida.
- [ ] Mensagem de erro é exibida.
- [ ] WhatsApp recebe mensagem contextual.
- [ ] Não há envio duplicado.
- [ ] Existe consentimento de privacidade.
- [ ] CTA não é genérico.

---

# 11. Requisitos específicos do Manhattan Residence

## 11.1. Objetivo

Posicionar o Manhattan como empreendimento disponível para avaliação e visita, se esse status estiver confirmado.

## 11.2. Requisitos

- status visível;
- CTA “Agendar uma visita”;
- história do endereço;
- conceito;
- arquitetura;
- interiores;
- materiais;
- tipologias;
- plantas;
- galeria curada;
- localização;
- disponibilidade;
- contato.

## 11.3. Regras

- não colocar ficha técnica antes da apresentação do conceito;
- não misturar plantas na galeria;
- tratar interiores separadamente;
- mostrar materiais com benefícios validados;
- usar imagens reais quando disponíveis;
- evitar dezenas de imagens sem categoria.

## 11.4. Critérios de aceite

- [ ] Status confirmado.
- [ ] CTA adequado ao status.
- [ ] História do endereço implementada ou ocultada.
- [ ] Interiores possuem seção própria.
- [ ] Materiais possuem seção própria ou ficam ocultos até aprovação.
- [ ] Galeria possui categorias.
- [ ] Plantas possuem seção própria.
- [ ] Localização está validada.
- [ ] Contato identifica Manhattan.

---

# 12. Requisitos específicos do Ernesto 142

## 12.1. Objetivo

Apresentar o Ernesto 142 conforme seu status oficial e permitir acompanhamento ou solicitação de apresentação.

## 12.2. Requisitos

- status visível;
- CTA correspondente ao status;
- história do endereço;
- conceito;
- arquitetura;
- interiores;
- materiais;
- informações técnicas;
- plantas;
- galeria;
- localização;
- acompanhamento, se estiver em obras;
- contato.

## 12.3. Acompanhamento da obra

Quando aplicável, permitir:

- atualização datada;
- imagem principal;
- galeria histórica;
- etapa atual;
- etapas concluídas;
- previsão oficial;
- responsáveis autorizados.

## 12.4. Critérios de aceite

- [ ] O status é oficial.
- [ ] O CTA corresponde ao status.
- [ ] Atualização possui data.
- [ ] Fotos são reais e identificadas.
- [ ] Percentual só aparece quando validado.
- [ ] Previsão de entrega só aparece quando aprovada.
- [ ] O histórico é ordenado do mais recente para o mais antigo.
- [ ] Contato identifica Ernesto 142.

---

# 13. Caderno FVS

## 13.1. Objetivo

Construir autoridade editorial conectando:

- memória;
- território;
- arquitetura;
- interiores;
- materiais;
- Gramado;
- mercado;
- patrimônio;
- obras.

O Caderno FVS não deve funcionar como um conjunto de anúncios.

## 13.2. Página de listagem

Elementos:

- título;
- introdução;
- categorias;
- artigos recentes;
- artigos em destaque;
- newsletter opcional.

## 13.3. Card de artigo

Apresentar:

- categoria;
- imagem;
- título;
- resumo;
- autoria;
- data;
- CTA.

CTA:

- Ler no Caderno FVS.

## 13.4. Página de artigo

Estrutura:

- categoria;
- título;
- subtítulo;
- autoria;
- data;
- imagem;
- texto;
- imagens complementares;
- conteúdos relacionados;
- empreendimento relacionado, quando aplicável;
- CTA discreto.

## 13.5. Categorias obrigatórias

- Histórias.
- Arquitetura e Interiores.
- Materiais, Sustentabilidade e Tecnologias.
- Gramado e Serra.
- Mercado e Patrimônio.
- Obras e Construção.

## 13.6. Critérios editoriais

- identificar tema;
- identificar autoria;
- relacionar conteúdo ao território ou aos projetos;
- evitar propaganda direta;
- manter leitura simples;
- usar títulos claros;
- manter parágrafos curtos;
- utilizar imagens com direito de uso;
- criar URLs permanentes;
- permitir metadados de SEO;
- inserir links internos;
- permitir conteúdos relacionados.

## 13.7. Critérios de aceite

- [ ] Caderno presente no menu.
- [ ] Categorias implementadas.
- [ ] Página de listagem responsiva.
- [ ] Página de artigo responsiva.
- [ ] Autoria exibida.
- [ ] Data exibida.
- [ ] Categoria exibida.
- [ ] URLs amigáveis.
- [ ] Metadados configuráveis.
- [ ] Links internos possíveis.
- [ ] CTA discreto.
- [ ] Nenhum artigo depende de propaganda direta para fazer sentido.
- [ ] Newsletter pode ser adicionada sem refazer a estrutura.

## 13.8. Resultado esperado

- Autoridade editorial.
- Maior conexão com território.
- Conteúdo relacionado aos empreendimentos.
- Maior profundidade de navegação.
- Estrutura para crescimento orgânico.

---

# 14. Página de contato

## 14.1. Objetivo

Permitir que o usuário inicie uma conversa com o menor esforço possível.

## 14.2. Tipos de contato possíveis

- conhecer a FVS;
- agendar visita;
- receber apresentação;
- acompanhar obra;
- consultar disponibilidade;
- contato institucional;
- contato comercial.

## 14.3. Formulário

Campos mínimos:

- nome;
- telefone ou WhatsApp;
- e-mail, se necessário;
- interesse;
- empreendimento;
- mensagem;
- consentimento.

## 14.4. Critérios de aceite

- [ ] Campos possuem label.
- [ ] Erros são claros.
- [ ] Envio possui loading.
- [ ] Sucesso possui confirmação.
- [ ] O usuário não envia duas vezes.
- [ ] O interesse é salvo.
- [ ] O empreendimento é salvo.
- [ ] O canal de origem é salvo, quando possível.
- [ ] Consentimento é registrado.
- [ ] A experiência mobile é adequada.
- [ ] WhatsApp possui mensagem contextual.

## 14.5. Resultado esperado

- Menor fricção.
- Leads mais contextualizados.
- Melhor encaminhamento comercial.

---

# 15. CTAs oficiais recomendados

Usar conforme contexto.

## Empreendimentos

- Conhecer o Manhattan.
- Conhecer o Ernesto 142.
- Ver empreendimentos entregues.

## Conversão

- Agendar uma visita.
- Receber apresentação.
- Falar com a FVS.
- Falar sobre disponibilidade.
- Solicitar informações.

## Conteúdo

- Ler a história do projeto.
- Ler no Caderno FVS.
- Conhecer os materiais.
- Explorar os interiores.
- Explorar a localização.
- Ver plantas.

## Obra

- Acompanhar a obra.
- Ver atualização da obra.

## Regras de CTA

- não usar “Saiba mais” como padrão;
- evitar mais de um CTA principal por seção;
- usar verbo no infinitivo;
- informar claramente a ação;
- não prometer download se o material será enviado posteriormente;
- não usar CTA comercial agressivo dentro de conteúdo editorial.

---

# 16. Design system e consistência

## 16.1. Componentes reutilizáveis

Criar ou padronizar:

- Header.
- Menu desktop.
- Menu mobile.
- Footer.
- Hero.
- StatusBadge.
- ProjectCard.
- ArticleCard.
- SectionHeader.
- CTAButton.
- SecondaryButton.
- Gallery.
- Lightbox.
- FloorPlanViewer.
- MaterialCard.
- TeamCard.
- ConstructionUpdate.
- ContactForm.
- NewsletterForm.
- Breadcrumb.
- Tabs.
- Accordion.
- LoadingState.
- EmptyState.
- ErrorState.
- SuccessState.

## 16.2. Estados dos componentes

Todos os componentes interativos devem possuir:

- default;
- hover;
- focus;
- active;
- disabled;
- loading;
- success, quando aplicável;
- error, quando aplicável.

## 16.3. Critérios de aceite

- [ ] Botões seguem padrão único.
- [ ] Focus visível.
- [ ] Contraste adequado.
- [ ] Espaçamentos consistentes.
- [ ] Tipografia consistente.
- [ ] Cards seguem o mesmo comportamento.
- [ ] Galerias seguem o mesmo padrão.
- [ ] Status utiliza nomenclatura consistente.
- [ ] Não existem variações não documentadas.

---

# 17. Responsividade

## 17.1. Breakpoints

Utilizar os breakpoints já existentes no projeto, se coerentes.

Caso não existam, definir uma escala consistente.

## 17.2. Regras mobile

- navegação em menu acessível;
- áreas de toque adequadas;
- hero sem corte crítico;
- CTAs visíveis;
- textos sem tamanho reduzido excessivo;
- imagens sem overflow;
- tabelas convertidas para cards ou scroll controlado;
- carrossel com swipe;
- lightbox em tela cheia;
- mapa sem bloquear scroll;
- formulário em uma coluna;
- rodapé reorganizado.

## 17.3. Critérios de aceite

- [ ] Sem overflow horizontal.
- [ ] Menu abre e fecha corretamente.
- [ ] Focus e navegação por teclado funcionam.
- [ ] CTA não bloqueia conteúdo.
- [ ] Imagens mantêm proporção.
- [ ] Texto não quebra de forma inadequada.
- [ ] Galeria funciona por toque.
- [ ] Formulário funciona em teclado mobile.
- [ ] Campos usam tipos corretos.
- [ ] Layout testado em larguras pequenas e grandes.

---

# 18. Performance

## 18.1. Imagens

- usar formatos modernos;
- utilizar tamanhos responsivos;
- aplicar lazy loading;
- priorizar hero;
- evitar imagens excessivamente pesadas;
- preservar qualidade arquitetônica;
- utilizar blur ou placeholder quando aplicável.

## 18.2. Scripts

- carregar mapas sob demanda;
- evitar bibliotecas desnecessárias;
- adiar scripts não críticos;
- evitar carrosséis pesados;
- minimizar JavaScript client-side quando possível.

## 18.3. Critérios de aceite

- [ ] Hero possui carregamento prioritário.
- [ ] Galerias usam lazy loading.
- [ ] Mapa carrega após interação ou quando próximo do viewport.
- [ ] Não há layout shift significativo.
- [ ] Não há vídeo automático pesado sem controle.
- [ ] Imagens possuem width e height.
- [ ] Fontes são carregadas de forma otimizada.
- [ ] Performance mobile é testada.

---

# 19. Acessibilidade

## 19.1. Requisitos

- HTML semântico;
- hierarquia correta de headings;
- textos alternativos;
- labels em formulários;
- foco visível;
- navegação por teclado;
- contraste;
- botão de fechar acessível;
- mensagens de erro associadas aos campos;
- aria-live em confirmações;
- não depender apenas de cor;
- respeitar redução de movimento.

## 19.2. Critérios de aceite

- [ ] Uma única tag H1 por página.
- [ ] Headings em ordem lógica.
- [ ] Todas as imagens relevantes têm alt.
- [ ] Imagens decorativas têm alt vazio.
- [ ] Formulários possuem labels.
- [ ] Lightbox fecha por teclado.
- [ ] Menu mobile é acessível.
- [ ] Estados de foco são visíveis.
- [ ] Erros são anunciados.
- [ ] Animações respeitam prefers-reduced-motion.

---

# 20. SEO técnico e conteúdo

Embora o PDF não seja um documento de SEO, a nova arquitetura deve permitir indexação adequada.

## 20.1. Requisitos

- title configurável;
- meta description;
- canonical;
- Open Graph;
- headings semânticos;
- URLs amigáveis;
- sitemap;
- robots;
- dados estruturados aplicáveis;
- links internos;
- breadcrumbs;
- alt text;
- conteúdo renderizado de forma indexável.

## 20.2. Estrutura sugerida de URLs

- `/`
- `/a-fvs`
- `/empreendimentos`
- `/empreendimentos/manhattan-residence`
- `/empreendimentos/ernesto-142`
- `/empreendimentos/entregues`
- `/caderno-fvs`
- `/caderno-fvs/historias`
- `/caderno-fvs/arquitetura-e-interiores`
- `/caderno-fvs/materiais-sustentabilidade-tecnologias`
- `/caderno-fvs/gramado-e-serra`
- `/caderno-fvs/mercado-e-patrimonio`
- `/caderno-fvs/obras-e-construcao`
- `/caderno-fvs/[slug]`
- `/contato`

## 20.3. Critérios de aceite

- [ ] Todas as páginas possuem title.
- [ ] Todas as páginas possuem description.
- [ ] URLs não mudam sem redirects.
- [ ] Breadcrumbs implementados em páginas internas.
- [ ] Artigos possuem metadata.
- [ ] Empreendimentos possuem metadata.
- [ ] Sitemap atualizado.
- [ ] Links internos não estão quebrados.

---

# 21. Modelo de dados sugerido

Adaptar ao stack atual.

## 21.1. Empreendimento

```ts
type ProjectStatus =
  | "lancamento"
  | "em_obras"
  | "disponivel"
  | "concluido"
  | "entregue";

interface Project {
  id: string;
  slug: string;
  name: string;
  status: ProjectStatus;
  address: string;
  city: string;
  region?: string;
  shortDescription: string;
  valueProposition: string;
  heroImage: Media;
  history?: RichContent;
  concept?: RichContent;
  architecture?: RichContent;
  interiors?: InteriorSection;
  materials?: Material[];
  differentials?: Differential[];
  typologies?: Typology[];
  floorPlans?: FloorPlan[];
  gallery?: GalleryItem[];
  location?: LocationData;
  construction?: ConstructionData;
  team?: TeamMember[];
  primaryCta: CTA;
  secondaryCta?: CTA;
  seo: SEOData;
  published: boolean;
}
```

## 21.2. Material

```ts
interface Material {
  id: string;
  name: string;
  image?: Media;
  origin?: string;
  texture?: string;
  application?: string;
  performance?: string;
  durability?: string;
  sustainability?: string;
  perceivedBenefit: string;
  technicalSource?: string;
  relatedArticleSlug?: string;
  published: boolean;
}
```

## 21.3. Atualização de obra

```ts
interface ConstructionUpdate {
  id: string;
  projectId: string;
  date: string;
  title: string;
  description: string;
  stage?: string;
  progressPercentage?: number;
  images: Media[];
  nextStage?: string;
  officialDeliveryForecast?: string;
  approved: boolean;
}
```

Regra:

`progressPercentage` só pode ser publicado se `approved === true`.

## 21.4. Artigo

```ts
interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ArticleCategory;
  author: Author;
  publishedAt: string;
  heroImage: Media;
  excerpt: string;
  content: RichContent;
  relatedProjectSlugs?: string[];
  relatedArticleSlugs?: string[];
  seo: SEOData;
  published: boolean;
}
```

---

# 22. Gestão de conteúdo

Se o projeto possuir CMS, implementar os modelos anteriores.

Caso não possua CMS, organizar o conteúdo em arquivos estruturados.

Opções possíveis:

- JSON.
- TypeScript.
- Markdown.
- MDX.
- Headless CMS já presente no projeto.

## Requisitos

- empreendimento configurável;
- status configurável;
- seções opcionais;
- conteúdo publicado ou rascunho;
- artigos configuráveis;
- galeria configurável;
- atualizações de obra configuráveis;
- CTAs configuráveis;
- SEO configurável.

## Critérios de aceite

- [ ] É possível ocultar seção sem apagar código.
- [ ] É possível alterar status sem alterar layout.
- [ ] É possível adicionar artigo.
- [ ] É possível adicionar imagem.
- [ ] É possível definir ordem da galeria.
- [ ] É possível definir CTA.
- [ ] É possível controlar publicação.
- [ ] Conteúdo inválido não quebra a página.

---

# 23. Analytics e eventos

Não definir percentuais de melhoria sem dados.

A implementação deve preparar medição antes e depois.

## 23.1. Eventos recomendados

- `view_home`
- `view_project_list`
- `view_project`
- `click_project_card`
- `click_primary_cta`
- `click_secondary_cta`
- `open_gallery`
- `navigate_gallery`
- `view_floor_plan`
- `download_floor_plan`
- `view_material`
- `view_interior_section`
- `view_construction_update`
- `click_location`
- `click_whatsapp`
- `start_form`
- `submit_form_success`
- `submit_form_error`
- `view_article`
- `click_related_article`
- `click_related_project`
- `newsletter_signup`

## 23.2. Parâmetros

Sempre que aplicável:

- project_slug;
- project_status;
- page_path;
- cta_label;
- cta_position;
- article_slug;
- article_category;
- form_type;
- lead_interest;
- device_type.

## 23.3. Critérios de aceite

- [ ] Eventos não duplicam.
- [ ] CTAs enviam label.
- [ ] Empreendimento é identificado.
- [ ] Formulário registra sucesso e erro.
- [ ] WhatsApp é medido.
- [ ] Galeria é medida.
- [ ] Artigos são medidos.
- [ ] Dados pessoais não são enviados ao analytics.
- [ ] Consentimento é respeitado.

---

# 24. Métricas a acompanhar

Registrar baseline antes da publicação.

Métricas:

- cliques em cards de empreendimento;
- cliques em CTAs;
- abertura de WhatsApp;
- envio de formulário;
- taxa de erro;
- interação com galeria;
- visualização de plantas;
- interação com materiais;
- interação com acompanhamento de obra;
- profundidade de rolagem;
- tempo de engajamento;
- navegação para o Caderno;
- leitura de artigos;
- retorno de usuários;
- performance mobile.

Não definir como promessa:

- redução fixa de bounce;
- aumento fixo de conversão;
- aumento fixo de tempo;
- impacto percentual arbitrário.

## Resultado esperado

A estrutura deve permitir validar as seguintes hipóteses:

- usuários encontram empreendimentos com mais facilidade;
- usuários compreendem melhor o status;
- usuários interagem mais com conteúdo relevante;
- usuários chegam ao contato com mais contexto;
- conteúdos editoriais ampliam profundidade de navegação;
- evidências reais aumentam confiança.

---

# 25. Migração e preservação

## 25.1. Conteúdo existente

Mapear antes de alterar:

- páginas atuais;
- URLs;
- textos;
- imagens;
- CTAs;
- formulários;
- integrações;
- metadados;
- pixels;
- analytics;
- redirects;
- páginas indexadas.

## 25.2. Regras

- preservar URLs quando possível;
- criar redirects 301 quando necessário;
- não remover conteúdo sem backup;
- não quebrar integrações;
- preservar tags de analytics;
- preservar rastreamento de campanhas;
- manter rollback.

## 25.3. Critérios de aceite

- [ ] Backup realizado.
- [ ] Mapa de URLs criado.
- [ ] Redirects testados.
- [ ] Formulários testados.
- [ ] WhatsApp testado.
- [ ] Analytics testado.
- [ ] Metadados revisados.
- [ ] Nenhum link interno quebrado.
- [ ] Imagens antigas preservadas até aprovação final.

---

# 26. Plano de implementação

## Fase 0 — Auditoria do projeto

Objetivos:

- identificar stack;
- mapear rotas;
- mapear componentes;
- mapear conteúdo;
- mapear estilos;
- mapear integrações;
- mapear analytics;
- mapear imagens;
- mapear formulários.

Entregáveis:

- inventário técnico;
- inventário de páginas;
- inventário de componentes;
- mapa de riscos;
- plano de migração.

Critérios:

- [ ] Nenhuma alteração de produção antes da auditoria.
- [ ] Rotas atuais documentadas.
- [ ] Dependências identificadas.
- [ ] Fontes de conteúdo identificadas.
- [ ] Integrações identificadas.

---

## Fase 1 — Fundação de arquitetura

Implementar:

- menu;
- rotas;
- página A FVS;
- página Empreendimentos;
- template de empreendimento;
- Caderno FVS;
- Contato;
- rodapé;
- design system básico.

Critérios:

- [ ] Rotas funcionam.
- [ ] Menu consistente.
- [ ] Página ativa indicada.
- [ ] Mobile funcional.
- [ ] Componentes reutilizáveis.
- [ ] Nenhum conteúdo duplicado desnecessariamente.

---

## Fase 2 — Páginas de empreendimentos

Implementar:

- Manhattan;
- Ernesto 142;
- história;
- conceito;
- arquitetura;
- interiores;
- materiais;
- diferenciais;
- tipologias;
- plantas;
- galeria;
- localização;
- status;
- contato.

Critérios:

- [ ] Template reutilizável.
- [ ] Seções opcionais.
- [ ] Status muda CTA.
- [ ] Conteúdo técnico aparece depois das camadas de valor.
- [ ] Galeria e plantas separadas.

---

## Fase 3 — Confiança e obra

Implementar:

- entregues;
- equipe;
- autoria;
- acompanhamento;
- imagens reais;
- atualizações;
- datas.

Critérios:

- [ ] Dados aprovados.
- [ ] Conteúdo datado.
- [ ] Sem promessas não validadas.
- [ ] Histórico funcional.

---

## Fase 4 — Caderno FVS

Implementar:

- categorias;
- listagem;
- artigo;
- relacionados;
- ligação com empreendimentos;
- newsletter opcional.

Critérios:

- [ ] Conteúdo indexável.
- [ ] URLs amigáveis.
- [ ] Autoria e data.
- [ ] CTA discreto.
- [ ] Responsivo.

---

## Fase 5 — Qualidade

Executar:

- testes;
- acessibilidade;
- performance;
- SEO;
- analytics;
- formulários;
- responsividade;
- revisão de conteúdo;
- aprovação final.

Critérios:

- [ ] QA concluído.
- [ ] Sem erros críticos.
- [ ] Sem links quebrados.
- [ ] Sem overflow.
- [ ] Sem conteúdo fictício.
- [ ] Analytics validado.
- [ ] Rollback disponível.

---

# 27. Testes obrigatórios

## 27.1. Navegação

- menu desktop;
- menu mobile;
- página ativa;
- submenu;
- breadcrumbs;
- links internos;
- links externos;
- rodapé.

## 27.2. Empreendimentos

- status;
- CTA;
- seções opcionais;
- galeria;
- plantas;
- localização;
- contato;
- atualização de obra.

## 27.3. Formulários

- campos vazios;
- e-mail inválido;
- telefone inválido;
- consentimento;
- envio bem-sucedido;
- erro de API;
- duplo clique;
- loading;
- confirmação.

## 27.4. Galeria

- abrir;
- fechar;
- avançar;
- voltar;
- teclado;
- swipe;
- contador;
- categorias;
- lazy loading;
- retorno à posição.

## 27.5. Mobile

- 320px;
- 360px;
- 390px;
- 430px;
- tablet;
- orientação horizontal.

## 27.6. Conteúdo

- textos;
- títulos;
- status;
- datas;
- nomes;
- endereços;
- metragens;
- plantas;
- autoria;
- materiais;
- CTAs.

---

# 28. Definition of Done

Uma funcionalidade só é considerada concluída quando:

- [ ] Implementada.
- [ ] Responsiva.
- [ ] Acessível.
- [ ] Testada.
- [ ] Sem erro de console relevante.
- [ ] Sem conteúdo fictício.
- [ ] Com analytics, quando aplicável.
- [ ] Com estados de loading, erro e sucesso.
- [ ] Com SEO, quando aplicável.
- [ ] Com aprovação visual.
- [ ] Com aprovação de conteúdo.
- [ ] Documentada.
- [ ] Compatível com rollback.

---

# 29. Resultado esperado após as alterações

Os resultados abaixo são qualitativos e devem ser validados por analytics após a publicação.

## 29.1. Navegação

- menu mais previsível;
- separação clara entre institucional, empreendimento e editorial;
- acesso mais rápido aos projetos;
- menor esforço para localizar contato.

## 29.2. Compreensão

- identificação imediata do empreendimento;
- status mais claro;
- proposta de valor mais evidente;
- ordem de conteúdo mais lógica;
- informação técnica apresentada no momento adequado.

## 29.3. Valor percebido

- arquitetura mais bem apresentada;
- interiores tratados como parte estratégica;
- materiais convertidos em benefícios;
- imagens mais bem curadas;
- maior consistência visual.

## 29.4. Confiança

- evidências reais;
- equipe identificada;
- entregas apresentadas;
- andamento atualizado;
- informações oficiais;
- menor sensação de promessa abstrata.

## 29.5. Conversão

- CTAs mais claros;
- formulários contextualizados;
- WhatsApp contextualizado;
- melhor identificação do interesse;
- jornada de contato com menos etapas.

## 29.6. Autoridade

- Caderno FVS estruturado;
- conteúdos ligados a território, memória e arquitetura;
- diferenciação institucional;
- possibilidade de crescimento editorial.

## 29.7. Mobile

- leitura mais confortável;
- CTAs acessíveis;
- galerias mais fáceis;
- carregamento melhor;
- ausência de bloqueios.

---

# 30. Checklist final para o Codex

## Antes de alterar

- [ ] Ler este PRD inteiro.
- [ ] Auditar o projeto atual.
- [ ] Identificar stack.
- [ ] Identificar rotas.
- [ ] Identificar componentes.
- [ ] Identificar CMS ou fonte de conteúdo.
- [ ] Identificar analytics.
- [ ] Criar branch específica.
- [ ] Criar backup.
- [ ] Não remover conteúdo sem mapeamento.

## Durante a implementação

- [ ] Criar componentes reutilizáveis.
- [ ] Manter identidade FVS.
- [ ] Aplicar arquitetura definida.
- [ ] Implementar seções opcionais.
- [ ] Não inventar conteúdo.
- [ ] Usar placeholders administrativos.
- [ ] Garantir mobile.
- [ ] Garantir acessibilidade.
- [ ] Garantir performance.
- [ ] Adicionar analytics.

## Antes de concluir

- [ ] Rodar testes.
- [ ] Validar links.
- [ ] Validar formulários.
- [ ] Validar WhatsApp.
- [ ] Validar galeria.
- [ ] Validar plantas.
- [ ] Validar status.
- [ ] Validar metadados.
- [ ] Validar redirects.
- [ ] Validar conteúdo.
- [ ] Gerar relatório de alterações.
- [ ] Solicitar aprovação.

---

# 31. Instrução final de execução

A implementação deve produzir um sistema FVS que seja:

**Simples para navegar.**  
**Sofisticado para perceber.**  
**Objetivo para converter.**

Toda decisão técnica ou visual deve ser avaliada por estas perguntas:

1. Isso reduz ou aumenta o esforço de compreensão?
2. O usuário sabe onde está?
3. O usuário entende o status do projeto?
4. A próxima ação está clara?
5. O conteúdo encanta antes de exigir análise técnica?
6. As informações aparecem progressivamente?
7. A interface transmite confiança com evidências reais?
8. O funcionamento em celular é adequado?
9. O padrão é consistente com as demais páginas?
10. A informação publicada é verdadeira, aprovada e atualizada?

Se uma solução não atender a essas perguntas, ela deve ser revisada antes de ser implementada.

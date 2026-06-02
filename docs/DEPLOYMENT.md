# Deployment — FVS Incorporações

Guia de publicação e manutenção.

## Fluxo Oficial

```
Claude Code
    ↓
Edita arquivos (HTML/CSS/JS)
    ↓
Testa localmente (opcional)
    ↓
Git commit
    ↓
Git push para GitHub
    ↓
Vercel lê repositório automaticamente
    ↓
Build automático
    ↓
Deploy automático
    ↓
URL live em https://fvs-incorporacoes.vercel.app
    ↓
Validação visual (browser)
```

---

## GitHub Setup

### Inicializar repositório

```bash
cd /fvs-site-html
git init
git add .
git commit -m "Initial commit: FVS Incorporações base structure"
git remote add origin https://github.com/[seu-usuario]/fvs-site-html.git
git push -u origin main
```

### Branch strategy

```
main (production)
  └─ Sempre deployado
  └─ Sempre pronto

develop (staging - futuro)
  └─ Para testes antes de main
```

---

## Vercel Setup

### Conectar repositório

1. Acessar https://vercel.com/
2. Fazer login
3. New Project → Import GitHub Repository
4. Selecionar `fvs-site-html`
5. Framework: `Other` (static HTML)
6. Deploy

### Configuração

```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "installCommand": ""
}
```

### Environment Variables

Se necessário no futuro:

```
ANALYTICS_ID = [ID do Google Analytics]
PIXEL_ID = [Meta Pixel ID]
```

---

## Commits Regulares

### Estrutura de commit

```bash
git add index.html style.css script.js assets docs README.md
git commit -m "[Etapa N] - Descrição breve da mudança"
git push
```

### Exemplos

```
[Etapa 2] - Implement Header and Hero
[Etapa 3] - Validate on Vercel
[Etapa 4] - Add Manifesto and Gramado sections
[Etapa 5] - Add Experiência de Morar section
[Etapa 6] - Add Empreendimentos portfolio
[Etapa 7] - Add immersive gallery
[Etapa 8] - Add CTA and Footer
[Etapa 9] - Visual audit and refinement
[Etapa 10] - Final optimization
```

---

## Validação na Vercel

### Deploy Status

```
✅ Green → Publicado corretamente
⚠️ Yellow → Em processo
❌ Red → Erro no deploy
```

### URL de Produção

```
https://fvs-incorporacoes.vercel.app/
```

### Preview URLs

Cada commit em `main` recebe uma URL:

```
https://fvs-site-html-[commit-hash].vercel.app/
```

---

## Validação Visual

Após deploy:

1. Abrir URL no navegador
2. Verificar cada seção
3. Testar responsividade (mobile, tablet)
4. Verificar links
5. Abrir DevTools (F12)
6. Checar console (sem erros)
7. Checar Lighthouse
8. Aprovar ou revisar

---

## Problemas Comuns

### Imagens não carregam

```
❌ /assets/images/foto.jpg
✅ ./assets/images/foto.jpg
✅ assets/images/foto.jpg
```

### CSS não aplica

```
❌ <link rel="stylesheet" href="style.css">
✅ <link rel="stylesheet" href="./style.css">
```

### JavaScript não funciona

```
❌ <script src="script.js"></script>
✅ <script src="./script.js"></script>
```

### Vercel não reconhece

Verificar se `index.html` está na raiz.

```
fvs-site-html/
  ├── index.html ← AQUI, na raiz
  ├── style.css
  ├── script.js
  └── assets/
```

---

## Manutenção

### Atualizações de conteúdo

```bash
# Editar arquivo
nano index.html

# Adicionar
git add index.html

# Commit
git commit -m "[Update] - Atualizar descrição da seção Gramado"

# Push
git push
```

### Atualizações de design

```bash
# Editar CSS
nano style.css

# Commit
git commit -m "[Design] - Ajustar spacing da seção Hero"

# Push
git push
```

### Atualizações de interações

```bash
# Editar JS
nano script.js

# Commit
git commit -m "[Interaction] - Melhorar menu mobile"

# Push
git push
```

---

## Integrações Futuras

### Google Analytics

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // ... Pixel code ...
</script>
```

### Formulário (Formspree)

```html
<form action="https://formspree.io/f/[YOUR-ID]" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Enviar</button>
</form>
```

### WhatsApp Link

```html
<a href="https://wa.me/5554999999999">Conversar no WhatsApp</a>
```

---

## Backup

### GitHub é backup

O repositório é backup automaticamente.

```bash
# Clonar em outro local
git clone https://github.com/[seu-usuario]/fvs-site-html.git
```

### Arquivo local

Manter cópia local:

```bash
# Ver histórico
git log

# Reverter mudança
git revert [commit-hash]

# Ver versão antiga
git show [commit-hash]:index.html
```

---

## Rollback Rápido

Se algo quebrou:

```bash
# Ver últimos commits
git log --oneline

# Reverter para versão anterior
git revert [commit-hash]
git push

# Vercel redeploy automaticamente
```

---

## Monitoramento

### Vercel Analytics

Acessar em https://vercel.com/dashboard

- Deployments history
- Performance metrics
- Error logs
- Traffic

### Performance

Usar Lighthouse (DevTools → F12 → Lighthouse)

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## Checklist de Deploy

Antes de cada push:

```
[ ] HTML válido
[ ] CSS sem erros
[ ] JS testado
[ ] Imagens otimizadas
[ ] Links funcionando
[ ] Responsivo
[ ] Sem console errors
[ ] Commit message clara
[ ] Git status limpo
[ ] Vercel deploy verde
[ ] URL validada
```

---

## Contato de Suporte

- GitHub: Abrir issue no repositório
- Vercel: https://vercel.com/support
- Claude Code: /help

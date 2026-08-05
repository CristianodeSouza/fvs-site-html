# Rollback da Arquitetura de Conteúdo

## Ponto de retorno preservado

A versão publicada antes desta reorganização está marcada no Git com a tag:

```text
pre-architecture-restructure-20260805
```

Essa tag aponta para o commit `6abb67c` e foi enviada ao repositório remoto antes de qualquer alteração estrutural.

## Reversão recomendada

Caso a nova arquitetura não seja aprovada, reverta o commit desta implementação. Esse é o caminho seguro porque preserva o histórico e aciona um novo deploy da Vercel:

```bash
git revert <commit-da-reestruturacao>
git push origin main
```

## Consulta da versão anterior

Para comparar a versão atual com a base preservada:

```bash
git diff pre-architecture-restructure-20260805..HEAD
```

Não use `git reset --hard` para voltar de versão sem uma decisão explícita: ele pode descartar trabalho local não relacionado.

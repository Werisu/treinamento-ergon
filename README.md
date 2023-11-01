# TreinamentoErgon

Aplicação de uma plataforma para treinamento que está sendo desenvolvida para os clientes da **Ergon Sistemas**.

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Este workspace foi gerado pelo [Build System Nx.](https://nx.dev)** ✨

## Setup do projeto

```
https://github.com/Werisu/treinamento-ergon.git
cd treinamento-ergon
npm install
```

## Servir o projeto localmente

```
npm start
```

Ou

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test treinamento-ergon
npx nx lint modules-layout
```

## Visualizar Dependency Graph

```
npx nx graph
```

## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

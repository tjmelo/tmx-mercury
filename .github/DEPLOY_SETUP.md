# Configuração do Deploy Automático

Este projeto está configurado com um workflow do GitHub Actions que executa deploy automático sempre que houver merge na branch `main`.

## Secrets Necessários

Para que o workflow funcione corretamente, você precisa configurar os seguintes secrets no repositório GitHub:

### 1. Docker Hub Secrets

Acesse: `Settings` → `Secrets and variables` → `Actions` → `Repository secrets`

Adicione os seguintes secrets:

- `DOCKER_USERNAME`: Seu nome de usuário do Docker Hub
- `DOCKER_PASSWORD`: Sua senha ou token de acesso do Docker Hub

### 2. Como obter as credenciais do Docker Hub

1. Acesse [Docker Hub](https://hub.docker.com)
2. Faça login na sua conta
3. Vá em `Account Settings` → `Security`
4. Crie um novo `Access Token` se preferir usar token ao invés da senha
5. Use o token como `DOCKER_PASSWORD`

## Variáveis de Ambiente

O workflow utiliza as seguintes variáveis de ambiente:

### Variáveis Globais do Workflow
- `REGISTRY`: docker.io (registro do Docker Hub)
- `IMAGE_NAME`: Nome da imagem baseado no repositório GitHub
- `TMX_PATH`: tmx-mercury (caminho do projeto)
- `TMX_NAME`: "TMX Mercury" (nome do projeto)
- `PROJECT_NAME`: tmx-mercury (nome do projeto)
- `PROJECT_VERSION`: Versão baseada na branch/ref
- `PORT`: 3000 (porta da aplicação)
- `NODE_ENV`: production (ambiente de produção)

### Variáveis de Build do Docker
Todas as variáveis acima são passadas como build-args para o Docker, permitindo:
- Configuração dinâmica do container
- Versionamento automático
- Flexibilidade de deployment

## O que o Workflow Faz

### Job de Teste (sempre executa)
1. **Checkout** do código
2. **Setup** do Node.js 20
3. **Instalação** das dependências
4. **Execução** dos comandos:
   - `npm run prefetch`
   - `npm run prelint` 
   - `npm run prestart`
   - `npm run test`
   - `npm run lint`

### Job de Build e Deploy (apenas na branch main)
1. **Build** da aplicação (`npm run build`) com NODE_ENV=production
2. **Build** da imagem Docker com todas as variáveis de ambiente
3. **Push** da imagem para Docker Hub (docker.io)
4. **Deploy** para GitHub Pages (`npm run deploy`)

## Tags da Imagem Docker

As imagens são taggeadas automaticamente com:
- `latest` (para a branch main)
- `main` (para a branch main)
- `main-<commit-sha>` (para commits específicos)

## Estrutura do Workflow

```
.github/workflows/deploy.yml
```

O workflow está configurado para:
- Executar em pushes e pull requests para a branch `main`
- Usar Node.js 20 (compatível com o Dockerfile)
- Fazer cache das dependências npm
- Build multi-plataforma (linux/amd64, linux/arm64)
- Cache do Docker Buildx para builds mais rápidos

## Monitoramento

Você pode acompanhar o status dos deploys em:
- `Actions` tab do GitHub
- Logs detalhados de cada step
- Notificações por email (se configurado)

## Troubleshooting

### Erro de Login no Docker Hub
- Verifique se os secrets `DOCKER_USERNAME` e `DOCKER_PASSWORD` estão configurados
- Confirme se as credenciais estão corretas
- Para organizações, use um token de acesso pessoal

### Erro de Build
- Verifique se todos os arquivos necessários estão no repositório
- Confirme se o Dockerfile está correto
- Verifique os logs do GitHub Actions para detalhes específicos

### Erro de Deploy no GitHub Pages
- Verifique se o repositório tem GitHub Pages habilitado
- Confirme se o token `GITHUB_TOKEN` tem permissões adequadas
- Verifique se o comando `npm run deploy` está funcionando localmente

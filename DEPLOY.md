# Como publicar o blog

## Opção 1: Vercel (recomendado — mais rápido)

1. **Crie uma conta** em [vercel.com](https://vercel.com) (pode usar login com GitHub).

2. **Suba o projeto no GitHub** (se ainda não subiu):
   - Crie um repositório em github.com (ex: `blogterror`).
   - No terminal, na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Blog Coberta até o Pescoço"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/blogterror.git
   git push -u origin main
   ```

3. **Conecte na Vercel**:
   - Em [vercel.com/new](https://vercel.com/new), clique em **Import Git Repository**.
   - Escolha o repositório do blog.
   - **Framework Preset**: Vite (já deve detectar).
   - **Root Directory**: deixe em branco.
   - Clique em **Deploy**.

4. Pronto. O site ficará em `https://seu-projeto.vercel.app`.  
   Ao dar push no GitHub, a Vercel faz deploy automático.

---

## Opção 2: GitHub Pages

1. **Subir o código no GitHub** (igual ao passo 2 acima, se ainda não fez).

2. **Instalar dependências e fazer o deploy**:
   ```bash
   npm install
   npm run deploy
   ```
   Isso gera a pasta `dist` e envia para a branch `gh-pages`.

3. **Ativar o GitHub Pages**:
   - No GitHub, abra o repositório → **Settings** → **Pages**.
   - Em **Source**, escolha **Deploy from a branch**.
   - **Branch**: `gh-pages` (ou `main` se configurou para servir da raiz).
   - **Folder**: `/ (root)`.
   - Salve.

4. O site ficará em:
   **https://mateussleite.github.io/blogterror**

   (Pode levar 1–2 minutos na primeira vez.)

---

## Resumo

| Onde        | URL exemplo                          | Comando / Ação                    |
|------------|---------------------------------------|------------------------------------|
| **Vercel** | `https://blogterror.vercel.app`       | Conectar repo em vercel.com/new    |
| **GitHub Pages** | `https://mateussleite.github.io/blogterror` | `npm run deploy` + ativar Pages |

Se mudar algo no código e quiser atualizar:
- **Vercel**: é só dar `git push` (deploy automático).
- **GitHub Pages**: rode de novo `npm run deploy` e espere 1–2 min.

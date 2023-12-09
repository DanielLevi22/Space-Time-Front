<!-- Adicione uma imagem a seguir para a capa do README -->
<p align="center">
  <img src="/public/imagens/capa.png" alt="Space Time Logo">
</p>

# Space Time

Space Time é um aplicativo para armazenar lembranças através de imagens e textos. Este projeto utiliza Next.js 13 para o frontend, Prisma para a camada de acesso a dados e FaunaDB com Faastify para o backend.

## Funcionalidades

- **Armazenamento de Lembranças:** Faça o upload de imagens e adicione descrições para guardar suas lembranças.
- **Segurança e Privacidade:** Seus dados são armazenados de forma segura, e implementamos práticas de segurança para proteger suas informações.
**Autenticação GitHub:** Proteja o acesso e as operações no aplicativo com autenticação GitHub.

## Tecnologias Utilizadas

- **Frontend:** Next.js 13
- **Backend:** Node com Faastify
- **Camada de Acesso a Dados:** Prisma
- **Autenticação:** GitHub
## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias para o seu projeto. Veja o exemplo no arquivo `.env.example`.

```bash
# Instale as dependências
npm install

# Execute o aplicativo localmente
npm run dev

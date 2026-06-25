<div align="center">

# ✂️ FSW Barber

### Plataforma full stack para descoberta de barbearias e agendamento de serviços

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-NeonDB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[🌐 Acessar o projeto](https://fsw-barber-umber.vercel.app/) •
[📂 Ver repositório](https://github.com/pedrofaleirosss/fsw-barber)

</div>

---

## 📖 Sobre o projeto

O **FSW Barber** é uma aplicação web full stack voltada para o agendamento de serviços em barbearias.

A plataforma permite que o usuário encontre barbearias, pesquise por serviços específicos, visualize informações completas de cada estabelecimento e realize reservas em dias e horários disponíveis.

O projeto foi desenvolvido originalmente durante uma edição da **Full Stack Week**, promovida pelo **Full Stack Club**. Depois da conclusão do evento, retomei a aplicação para implementar melhorias próprias, com foco em responsividade, experiência do usuário, organização visual e correção de avisos de acessibilidade e performance.

Esse projeto foi muito importante para consolidar meus conhecimentos em desenvolvimento full stack com **Next.js, TypeScript, Tailwind CSS, Prisma e PostgreSQL**.

---

## 🖥️ Demonstração

### Desktop

<div align="center">
  <img src="./docs/images/home-desktop.png" alt="Página inicial do FSW Barber no desktop" width="100%" />
</div>

<br />

<div align="center">
  <img src="./docs/images/barbershop-desktop.png" alt="Página de uma barbearia no desktop" width="49%" />
  <img src="./docs/images/booking-sheet-desktop.png" alt="Tela de reserva no desktop" width="49%" />
</div>

<br />

<div align="center">
  <img src="./docs/images/search-desktop.png" alt="Busca de barbearias no desktop" width="49%" />
  <img src="./docs/images/bookings-desktop.png" alt="Página de agendamentos no desktop" width="49%" />
</div>

### Mobile

<div align="center">
  <img src="./docs/images/home-mobile.png" alt="Página inicial do FSW Barber no celular" width="24%" />
  <img src="./docs/images/menu-mobile.png" alt="Menu lateral do FSW Barber no celular" width="24%" />
  <img src="./docs/images/barbershop-mobile.png" alt="Página de barbearia no celular" width="24%" />
  <img src="./docs/images/booking-sheet-mobile.png" alt="Agendamento de serviço no celular" width="24%" />
</div>

<br />

<div align="center">
  <img src="./docs/images/search-mobile.png" alt="Busca de barbearias no celular" width="32%" />
  <img src="./docs/images/bookings-mobile.png" alt="Página de agendamentos no celular" width="32%" />
  <img src="./docs/images/booking-details-mobile.png" alt="Detalhes de uma reserva no celular" width="32%" />
</div>

---

## ✨ Funcionalidades

### 🔎 Busca e descoberta

- busca de barbearias por nome;
- busca rápida por categorias de serviços;
- exibição de barbearias recomendadas;
- exibição de barbearias populares;
- visualização detalhada de cada estabelecimento;
- informações de endereço, avaliação, descrição e contato;
- listagem dos serviços disponíveis em cada barbearia.

### 📅 Agendamentos

- seleção de um serviço;
- escolha de uma data disponível;
- escolha de um horário disponível;
- bloqueio de horários já reservados;
- horários calculados de acordo com a data e o momento atual;
- confirmação de reserva;
- visualização de reservas confirmadas;
- visualização de reservas finalizadas;
- cancelamento de reservas futuras;
- exibição dos próximos agendamentos diretamente na Home.

### 🔐 Autenticação

- login com Google;
- gerenciamento de sessão com NextAuth;
- associação dos agendamentos ao usuário autenticado;
- proteção de páginas que exigem autenticação;
- encerramento de sessão pelo menu lateral.

### 📱 Interface

- design mobile-first;
- adaptação para tablets e desktops;
- cards de barbearias reutilizáveis;
- menu lateral responsivo;
- dialogs, sheets, badges e toasts;
- calendário para escolha da data;
- horários organizados de forma responsiva;
- feedback visual durante as principais ações do usuário.

---

## 🧠 Regras de agendamento

Uma das partes mais importantes do projeto é a validação dos horários disponíveis.

O sistema considera:

- a data escolhida pelo usuário;
- o horário atual;
- os agendamentos já existentes;
- os horários de atendimento configurados;
- a impossibilidade de selecionar um horário que já tenha sido reservado.

Com isso, o usuário visualiza apenas opções válidas para realizar o agendamento.

```text
Usuário seleciona uma data
        ↓
Sistema gera os horários disponíveis
        ↓
Horários anteriores ao momento atual são removidos
        ↓
Horários já reservados também são removidos
        ↓
Usuário escolhe uma opção válida
```

---

## 🧰 Tecnologias utilizadas

### Front-end

- **Next.js 14** — framework utilizado na construção da aplicação;
- **React 18** — criação da interface por componentes;
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento;
- **Tailwind CSS** — estilização e responsividade;
- **shadcn/ui e Radix UI** — componentes acessíveis para dialogs, sheets, avatars e outros elementos;
- **Lucide React** — biblioteca de ícones;
- **React Day Picker** — calendário para seleção das datas;
- **date-fns** — manipulação e formatação de datas;
- **Sonner** — feedbacks por meio de notificações.

### Formulários e validação

- **React Hook Form** — gerenciamento de formulários;
- **Zod** — criação dos schemas de validação;
- **Hookform Resolvers** — integração entre React Hook Form e Zod.

### Back-end e banco de dados

- **Next.js Server Components e Server Actions** — execução de consultas e regras no servidor;
- **PostgreSQL** — banco de dados relacional;
- **NeonDB** — hospedagem do banco PostgreSQL;
- **Prisma ORM** — modelagem, relacionamentos e consultas ao banco;
- **NextAuth.js** — autenticação com Google;
- **Prisma Adapter** — persistência dos dados da autenticação.

### Qualidade e produtividade

- **ESLint** — análise de código;
- **Prettier** — formatação automática;
- **Prettier Plugin Tailwind CSS** — ordenação das classes;
- **Husky** — execução de tarefas antes dos commits;
- **lint-staged** — validação dos arquivos alterados;
- **Conventional Commits** — padronização das mensagens de commit;
- **Vercel** — deploy e hospedagem da aplicação.

---

## 🏗️ Arquitetura e organização

A aplicação utiliza o **App Router do Next.js**, com separação entre páginas, componentes reutilizáveis, ações, dados, helpers e configurações.

```text
fsw-barber/
├── app/
│   ├── _actions/            # Ações da aplicação
│   ├── _components/         # Componentes reutilizáveis
│   ├── _constants/          # Opções e valores constantes
│   ├── _data/               # Funções de consulta e carregamento
│   ├── _lib/                # Prisma e autenticação
│   ├── barbershops/         # Busca e detalhes das barbearias
│   ├── bookings/            # Página de agendamentos
│   └── page.tsx             # Página inicial
├── prisma/
│   ├── schema.prisma        # Modelagem do banco
│   └── seed.ts              # Dados iniciais
├── public/                  # Imagens e arquivos estáticos
└── package.json
```

> A estrutura acima é uma visão resumida e pode variar conforme a versão atual do projeto.

---

## 🗃️ Banco de dados

O projeto utiliza **PostgreSQL hospedado no NeonDB**, integrado por meio do **Prisma ORM**.

Entre os principais dados gerenciados estão:

- usuários;
- contas de autenticação;
- barbearias;
- serviços;
- telefones;
- agendamentos;
- datas e horários das reservas.

O Prisma é utilizado para modelar as entidades, definir relacionamentos, realizar consultas, gerar o Prisma Client e popular o banco com dados iniciais.

---

## 🔑 Autenticação

A autenticação é realizada por meio do Google, utilizando NextAuth.js.

O fluxo permite que o usuário:

1. navegue pela plataforma;
2. faça login para realizar reservas;
3. consulte seus próprios agendamentos;
4. cancele reservas futuras;
5. encerre a sessão pelo menu.

---

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/);
- npm, yarn, pnpm ou bun;
- uma instância PostgreSQL;
- credenciais OAuth do Google.

### 1. Clone o repositório

```bash
git clone https://github.com/pedrofaleirosss/fsw-barber.git
```

### 2. Entre na pasta do projeto

```bash
cd fsw-barber
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="sua-url-do-postgresql"

NEXTAUTH_SECRET="sua-chave-secreta"

GOOGLE_CLIENT_ID="seu-client-id"
GOOGLE_CLIENT_SECRET="seu-client-secret"
```

> Confirme os nomes exatos das variáveis utilizadas no arquivo de autenticação do projeto.

### 5. Gere o Prisma Client

```bash
npx prisma generate
```

### 6. Sincronize o banco

```bash
npx prisma db push
```

### 7. Popule o banco

```bash
npx prisma db seed
```

### 8. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

---

## 📜 Scripts disponíveis

| Comando              | Descrição                                |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Inicia o ambiente de desenvolvimento     |
| `npm run build`      | Gera a versão de produção                |
| `npm run start`      | Inicia a aplicação em produção           |
| `npm run lint`       | Executa o ESLint                         |
| `npm run prepare`    | Configura o Husky e gera o Prisma Client |
| `npx prisma db seed` | Popula o banco com os dados iniciais     |

---

## 📐 Responsividade

O projeto foi desenvolvido inicialmente com foco em dispositivos móveis. Posteriormente, a interface foi adaptada para telas maiores utilizando uma abordagem **mobile-first** com Tailwind CSS.

Entre as melhorias realizadas estão:

- limitação da largura máxima do conteúdo;
- reorganização de listas em grids;
- cards adaptáveis;
- banners e imagens responsivas;
- calendário redimensionado;
- horários organizados em grid no desktop;
- sidebar com largura adequada em diferentes telas;
- páginas de agendamento adaptadas para desktop;
- melhor aproveitamento do espaço nas páginas de barbearia.

---

## ✅ Boas práticas adotadas

- componentes reutilizáveis;
- tipagem com TypeScript;
- validação com Zod;
- formulários com React Hook Form;
- separação entre Client e Server Components;
- consultas com Prisma;
- autenticação OAuth;
- proteção de páginas privadas;
- responsividade mobile-first;
- commits em inglês;
- Conventional Commits;
- formatação automática;
- organização das classes Tailwind;
- deploy pela Vercel.

Exemplos de commits:

```text
feat: add responsive design to home page
feat: improve barbershop desktop layout
fix: resolve image and accessibility warnings
refactor: improve booking components
```

---

## 📚 Aprendizados

O desenvolvimento do FSW Barber permitiu aprofundar conhecimentos em:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- componentes de servidor e cliente;
- React Hook Form;
- validação com Zod;
- manipulação de datas com date-fns;
- calendário com React Day Picker;
- autenticação com Google;
- modelagem com Prisma ORM;
- banco PostgreSQL;
- criação de regras de disponibilidade;
- gerenciamento de agendamentos;
- criação de layouts responsivos;
- acessibilidade;
- performance de imagens;
- deploy com Vercel;
- versionamento com Conventional Commits.

Mais do que um projeto de curso, o FSW Barber se tornou uma oportunidade de revisar conhecimentos, melhorar decisões de interface e evoluir a aplicação com implementações próprias.

---

## 🔮 Possíveis melhorias futuras

- seleção de profissional;
- avaliações reais das barbearias;
- horários de funcionamento personalizados;
- painel administrativo;
- notificações por e-mail;
- lembretes de agendamento;
- reagendamento de reservas;
- integração com mapas;
- filtros por localização;
- testes automatizados;
- estados de carregamento mais detalhados;
- área de perfil do usuário.

---

## 🌐 Deploy

A aplicação está publicada na Vercel:

### [Acessar o FSW Barber](https://fsw-barber-umber.vercel.app/)

---

## 🎓 Créditos

O projeto foi iniciado durante uma edição da **Full Stack Week**, promovida pelo **Full Stack Club**.

Após a conclusão do evento, foram adicionadas melhorias próprias relacionadas a responsividade, experiência do usuário, acessibilidade, performance e organização visual.

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Faleiros**.

[![GitHub](https://img.shields.io/badge/GitHub-pedrofaleirosss-181717?style=for-the-badge&logo=github)](https://github.com/pedrofaleirosss)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pedro_Faleiros-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-faleiros123/)

---

<div align="center">

⭐ Caso tenha gostado do projeto, considere deixar uma estrela no repositório!

</div>

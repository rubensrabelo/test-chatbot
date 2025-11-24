# BlueChat - Chatbot de Atendimento Simulado

Projeto fullstack (Frontend React + Backend Django) que simula um chatbot de atendimento. O objetivo é permitir que usuários A e B enviem mensagens, recebam respostas automáticas e consultem seu histórico de conversas.

---

## Tecnologias

- **Frontend:** React + TypeScript
- **Backend:** Python 3 + Django + Django REST Framework
- **Banco de Dados:** SQLite (padrão do Django)
- **Controle de Versão:** Git
- **Testes:** Vitest + React Testing Library

---

## Funcionalidades

### 1. Login Simulado
- Seleção de usuário ativo entre "Usuário A" ou "Usuário B".
- O estado do usuário é mantido no React via `UserContext`.
- Não há autenticação complexa.

### 2. Tela de Chat
- Interface de chat para enviar mensagens.
- Cada mensagem enviada é enviada ao backend com o identificador do usuário ativo.
- O backend retorna uma resposta simulada, exibida junto da mensagem do usuário.
- Testes unitários e de integração cobrem renderização, envio e exibição de mensagens.

### 3. Tela de Histórico
- Exibe o histórico completo de mensagens do usuário ativo.
- Troca de usuário atual atualiza o histórico automaticamente.
- Mensagens são buscadas via API `/api/messages/<user>/`.
- Componentes e hooks possuem testes unitários.

---

## Estrutura do Projeto

```bash
bluechat/
├─ backend/                     # Django Backend
│  ├─ chat/                     # Aplicação Django responsável pelo chat
│  ├─ core/                     # Configurações principais do Django (settings, urls, wsgi/asgi)
│  ├─ manage.py                 # Script de gerenciamento do Django
│  └─ db.sqlite3                # Banco de dados SQLite padrão do Django
│
├─ frontend/                    # React Frontend
│  ├─ public/                   # Arquivos públicos estáticos
│  ├─ src/
│  │  ├─ assets/                # Imagens, ícones e recursos estáticos
│  │  ├─ layout/                # Componentes de layout reutilizáveis (ex: Header, Footer)
│  │  ├─ components/            # Componentes gerais do frontend
│  │  │  └─ SideBar/            # Exemplo de componente de sidebar
│  │  ├─ pages/                 # Páginas da aplicação
│  │  │  ├─ Login/              # Tela de login simulada
│  │  │  ├─ Chat/               # Tela de chat
│  │  │  └─ History/            # Tela de histórico de mensagens
│  │  ├─ context/               # Contextos globais (ex: UserContext)
│  │  │  └─ UserContext.tsx
│  │  ├─ types/                 # Tipos TypeScript compartilhados
│  │  ├─ router/                # Configuração de rotas da aplicação
│  │  ├─ tests/                 # Testes unitários e de integração
│  │  ├─ App.tsx                # Componente raiz da aplicação
│  │  └─ main.tsx               # Ponto de entrada do React (renderização)
│  └─ package.json              # Dependências e scripts do frontend
│
└─ README.md                     # Documentação do projeto
```


---

## Como Rodar o Projeto

### Backend (Django)
1. Navegue para a pasta `backend`:
```bash
cd backend
```

2. Crie e ative um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Execute as migrações:

```bash
python manage.py migrate
```

5. Inicie o servidor:
```bash
python manage.py runserver
```

O backend estará rodando em [localhost:8000](http://127.0.0.1:8000).

### Frontend (React)

1. Navegue para a pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará rodando em [local:5173](http://localhost:5173) (ou porta definida pelo Vite).

### Testes
#### Backend
Para rodar testes unitários e de integração:

```bash
python manage.py test
```

#### Testes cobrem:

- A camada de serviço: criação e leitura de mensagens
- A camada de view: criação e leitura de mensagens

#### Frontend
Para rodar testes unitários e de integração:

```bash
npm run test
```

#### Testes cobrem:

- Login: seleção de usuário
- Chat: envio e exibição de mensagens
- Histórico: exibição de mensagens do usuário ativo

---

## Decisões Técnicas

- **Gerenciamento de Usuário:** Usei React Context (UserContext) para manter o estado global do usuário ativo.
- **Hooks Customizados:**
    - useChat para lidar com envio e estado do chat.
    - useHistory para buscar e armazenar histórico de mensagens.
- **Testes:** Mantive separação entre testes unitários (componentes e hooks) e integração (fluxo completo do chat e login).
- **Backend:** Estrutura simples em Django + Django REST Framework com endpoints:
    - GET /api/messages/<user>/ → retorna histórico do usuário
    - POST /api/messages/ → envia mensagem e retorna resposta simulada
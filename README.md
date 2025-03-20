# Nitrox Inteligência - Site Oficial

Este é o repositório do site oficial da Nitrox Inteligência, desenvolvido com Next.js 15, React 19, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para aplicações web com recursos avançados.
- **React 19**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript com tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo.
- **Framer Motion**: Biblioteca para animações em React.
- **ESLint**: Linter para identificar e corrigir problemas no código.
- **Class Variance Authority (CVA)**: Utilitário para gerenciar variantes de componentes.

## Estrutura do Projeto

```
nitrox-site/
├── public/            # Arquivos estáticos públicos
├── src/
│   ├── app/           # Páginas e layouts com App Router do Next.js
│   │   ├── (pages)/   # Rotas de páginas agrupadas
│   │   ├── api/       # Rotas de API
│   │   ├── components/    # Componentes React reutilizáveis
│   │   ├── context/       # Contextos React (tema, auth, etc.)
│   │   ├── hooks/         # Hooks React personalizados
│   │   ├── lib/           # Bibliotecas e utilidades
│   │   ├── services/      # Serviços para integração com APIs
│   │   ├── styles/        # Estilos e animações 
│   │   ├── types/         # Definições de tipos TypeScript
│   │   └── utils/         # Funções utilitárias
│   ├── tailwind.config.js # Configuração do Tailwind CSS
│   ├── tsconfig.json      # Configuração do TypeScript
│   └── next.config.js     # Configuração do Next.js
```

## Pré-requisitos

- Node.js 20 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/nitroxinteligencia/nitrox-site.git
cd nitrox-site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o site.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## Licença

Este projeto é de propriedade da Nitrox Inteligência.

## Contato

Para mais informações, entre em contato pelo email contato@nitrox.com.br.

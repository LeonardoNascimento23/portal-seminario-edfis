# XI Seminário de Educação Física

Portal oficial do XI Seminário de Educação Física, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- PostCSS
- @tailwindcss/typography
- @tailwindcss/forms

## Estrutura do Projeto

```
xiseminarioedfis/
├── app/                    # Rotas e páginas
├── components/            # Componentes reutilizáveis
├── content/              # Conteúdo em JSON
├── public/               # Arquivos estáticos
├── styles/              # Estilos globais
└── utils/               # Funções utilitárias
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/xiseminarioedfis.git
cd xiseminarioedfis
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse http://localhost:3000 no seu navegador.

## Gerenciamento de Conteúdo

O conteúdo do site é gerenciado através de arquivos JSON na pasta `content/`:

- `content/news/`: Notícias do evento
- `content/workshops/`: Oficinas e minicursos
- `content/gallery/`: Metadados da galeria de fotos

### Formato dos Arquivos

#### Notícias (`content/news/*.json`)

```json
{
  "title": "Título da Notícia",
  "date": "YYYY-MM-DD",
  "content": "Conteúdo completo...",
  "image": "/images/news/exemplo.jpg"
}
```

#### Oficinas (`content/workshops/*.json`)

```json
{
  "title": "Título da Oficina",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "location": "Local",
  "description": "Descrição...",
  "image": "/images/workshops/exemplo.jpg",
  "instructor": "Nome do Instrutor"
}
```

#### Galeria (`content/gallery/metadata.json`)

```json
{
  "images": [
    {
      "url": "/images/gallery/exemplo.jpg",
      "description": "Descrição da imagem"
    }
  ]
}
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

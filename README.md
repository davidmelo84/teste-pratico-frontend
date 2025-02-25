# Tabela de Funcionários

Este projeto é uma aplicação web simples que exibe uma lista de funcionários em uma tabela interativa. Ele permite visualizar informações como nome, cargo, data de admissão, telefone e foto do funcionário. Além disso, inclui uma funcionalidade de pesquisa para filtrar os dados em tempo real.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página
- **CSS**: Estilização da interface
- **TypeScript**: Manipulação da lógica do projeto
- **JSON Server**: Simula uma API REST para fornecer os dados

## Como Executar o Projeto

### 1. Clonar o Repositório
```sh
 git clone <URL_DO_REPOSITORIO>
 cd <NOME_DA_PASTA>
```

### 2. Instalar Dependências (Caso Necessário)
Caso esteja utilizando um ambiente Node.js, você pode precisar instalar o JSON Server:
```sh
npm install -g json-server
```

### 3. Iniciar o Servidor JSON
Execute o seguinte comando para iniciar a API fake:
```sh
json-server --watch db.json --port 3000
```
Isso iniciará um servidor na URL: `http://localhost:3000/employees`

### 4. Abrir o Projeto no Navegador
Agora, basta abrir o arquivo `index.html` no navegador ou utilizar uma extensão como "Live Server" no VS Code.

## Funcionalidades

- Exibição da lista de funcionários
- Busca dinâmica por nome, cargo ou telefone
- Formatação de data e telefone
- Interface responsiva para dispositivos móveis

## Estrutura do Projeto

```
/
│-- db.json           # Banco de dados fake (JSON Server)
│-- index.html        # Estrutura principal da página
│-- script.ts         # Código TypeScript para manipular a tabela
│-- style.css         # Estilização da interface
│-- tsconfig.json     # Configuração do TypeScript
```

## Melhorias Futuras

- Adicionar funcionalidades de CRUD (Criar, Editar e Deletar)
- Implementar um backend real para persistência de dados
- Melhorar a interface com animações e um design mais moderno

## Contribuição
Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request com melhorias. 

## Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---
Feito com ❤ por David Melo


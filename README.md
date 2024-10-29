# Projeto Gerenciador de Senhas 🔐

Boas-vindas ao repositório do projeto Gerenciador de Senhas! Este projeto foi desenvolvido como parte do curso da Trybe, com o objetivo de criar uma aplicação para gerenciar senhas de forma segura. Abaixo, você encontrará orientações sobre como estruturar o desenvolvimento do seu projeto e as funcionalidades que devem ser implementadas.

## Tecnologias Utilizadas

- React
- JavaScript
- HTML
- CSS
- sweetalert2 (para alertas)

## Funcionalidades do Projeto

O projeto consiste na implementação das seguintes funcionalidades:

1. **Título da Aplicação**: Adicionar um título "Gerenciador de Senhas" em uma tag `<h1>`.
2. **Componente Form**: Criar um componente `Form` com os seguintes elementos:
   - Input para "Nome do serviço"
   - Input para "Login"
   - Input para "Senha"
   - Input para "URL"
   - Botões "Cadastrar" e "Cancelar"
3. **Renderização Condicional**: Mostrar inicialmente o botão "Cadastrar nova senha". Ao clicar, o formulário deve ser exibido, e o botão deve desaparecer. O botão "Cancelar" deve reverter essa ação.
4. **Validação do Formulário**: O botão "Cadastrar" deve ser habilitado apenas se:
   - Todos os campos estiverem preenchidos.
   - A senha deve ter entre 8 e 16 caracteres, conter letras, números e um caractere especial.
5. **Mensagens de Validação**: Exibir mensagens de validação da senha com classes CSS para indicar se as condições foram atendidas.
6. **Cadastro de Serviços**: Implementar a função de cadastrar novos serviços, exibindo a lista dos serviços cadastrados.
7. **Remoção de Serviços**: Permitir a remoção de serviços cadastrados, exibindo a mensagem "Nenhuma senha cadastrada" quando a lista estiver vazia.
8. **Mostrar/Ocultar Senhas**: Implementar um checkbox para esconder ou mostrar todas as senhas cadastradas.
   
### Requisitos Bônus

9. **Mostrar/Ocultar Senha no Formulário**: Criar um botão para mostrar ou esconder a senha que está sendo digitada.
10. **Alerta ao Cadastrar Serviço**: Exibir um alerta com a mensagem "Serviço cadastrado com sucesso" ao cadastrar um novo serviço.

## Instruções de Instalação e Uso

1. Clone este repositório para o seu computador:

    ```bash
    git clone git@github.com:JyojiTenguam/gerenciador-de-senhas.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd gerenciador-de-senhas
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Execute a aplicação:

    ```bash
    npm start
    ```

5. Execute os testes para verificar se tudo está funcionando corretamente:

    ```bash
    npm test
    ```

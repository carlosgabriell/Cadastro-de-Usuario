  <h1>Cadastro de Usuário - Projeto</h1>
<h3>Features</h3>

- [x] Cadastro de usuário
      
  <h2>Funcionalidades</h2>
  <ul>
    <li>Cadastro de usuário com os seguintes campos:
      <ul>
        <li>Nome</li>
        <li>Nome de Usuário</li>
        <li>E-mail</li>
        <li>CPF</li>
        <li>Data de Nascimento</li>
      </ul>
    </li>
    <li>Validação dos campos:
      <ul>
        <li>CPF válido</li>
        <li>E-mail com formato válido</li>
        <li>Campos obrigatórios preenchidos</li>
        <li>Nome com mais de 10 caracteres</li>
        <li>Nome de Usuário com mais de 3 caracteres</li>
        <li>Nome de Usuário único (não permite cadastros duplicados)</li>
      </ul>
    </li>
    <li>Exibição dos usuários cadastrados na página</li>
    <li>Botão de cadastro com animação ao ser clicado</li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>PHP</li>
  </ul>

  <h2>Estrutura do Projeto</h2>
  <ul>
    <li><code>index.html</code>: Página HTML que contém o formulário de cadastro.</li>
    <li><code>style.css</code>: Arquivo CSS com o estilo da página.</li>
    <li><code>script.js</code>: Arquivo JavaScript com a lógica de validação do formulário e animação do botão.</li>
    <li><code>cadastro.php</code>: Arquivo PHP que recebe e processa os dados do formulário.</li>
  </ul>

  <h2>Como Executar</h2>
  <ol>
    <li>Certifique-se de ter um servidor web (como Apache ou Nginx) instalado no seu ambiente de desenvolvimento.</li>
    <li>Faça o download dos arquivos do projeto e coloque-os em um diretório acessível pelo servidor web.</li>
    <li>Acesse a página <code>index.html</code> no navegador.</li>
    <li>Preencha o formulário de cadastro e clique no botão "Cadastrar".</li>
    <li>Os dados serão validados e, se estiverem corretos, o usuário será cadastrado e exibido na página.</li>
  </ol>

  <h2>Observações</h2>
  <ul>
    <li>Este projeto utiliza apenas estruturas de dados em memória para armazenar os usuários cadastrados. Os dados serão perdidos ao reiniciar o servidor ou atualizar a página.</li>
    <li>As validações de CPF neste projeto são simplificadas e não implementam o algoritmo completo de validação. Recomenda-se substituir a função <code>validateCPF</code> no arquivo <code>cadastro.php</code> por uma implementação real de validação de CPF.</li>
  </ul>

  <h2>Contribuindo</h2>
  <p>Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, fique à vontade para abrir uma issue ou enviar um pull request.</p>

  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
  

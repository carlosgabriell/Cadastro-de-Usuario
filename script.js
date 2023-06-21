var userList = []; // Array para armazenar os usuários cadastrados

function submitForm() {
  // Obter os valores do formulário
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("cpf").value;
  var birthdate = document.getElementById("birthdate").value;

  // Validação dos campos no JavaScript
  if (!validateForm(name, username, email, cpf, birthdate)) {
    return;
  }

  // Verificar se o nome de usuário já está em uso
  if (checkUsernameExists(username)) {
    alert(
      "Nome de usuário já cadastrado. Por favor, escolha outro nome de usuário."
    );
    return;
  }

  var user = {
    name: name,
    username: username,
    email: email,
    cpf: cpf,
    birthdate: birthdate,
  };

  // Adicionar usuário à lista
  userList.push(user);

  // Adicionar usuário à lista na página
  addUserToList(user);
}

function validateForm(name, username, email, cpf, birthdate) {
  // Validar os campos do formulário no JavaScript
  if (
    name.length < 10 ||
    username.length < 3 ||
    !validateEmail(email) ||
    !validateCPF(cpf)
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return false;
  }

  return true;
}

function validateEmail(email) {
  // Implementação da validação do e-mail em JavaScript
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Implementação da validação do CPF em JavaScript
function validateCPF(cpf) {
  // Remover caracteres especiais do CPF
  cpf = cpf.replace(/[^\d]/g, "");

  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verificar se todos os dígitos são iguais (ex: 11111111111)
  var allDigitsAreEqual = /^(\d)\1+$/.test(cpf);
  if (allDigitsAreEqual) {
    return false;
  }

  // Validar os dígitos verificadores
  var sum = 0;
  var remainder;
  for (var i = 1; i <= 9; i++) {
    sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(9))) {
    return false;
  }

  sum = 0;
  for (var i = 1; i <= 10; i++) {
    sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

function checkUsernameExists(username) {
  // Verificar se o nome de usuário já está em uso
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].username === username) {
      return true;
    }
  }
  return false;
}

function addUserToList(user) {
  var userList = document.getElementById("userList");

  var listItem = document.createElement("li");
  listItem.classList.add("user-item");

  var userHTML = `
    <p class="name">Nome: ${user.name}</p>
    <p class="username">Usuário: ${user.username}</p>
    <p class="email">E-mail: ${user.email}</p>
    <p class="cpf">CPF: ${user.cpf}</p>
    <p class="birthdate">Data de Nascimento: ${user.birthdate}</p>
  `;

  listItem.innerHTML = userHTML;
  userList.appendChild(listItem);
}

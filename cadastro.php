<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obter os valores do formulário
  $name = $_POST['name'];
  $username = $_POST['username'];
  $email = $_POST['email'];
  $cpf = $_POST['cpf'];
  $birthdate = $_POST['birthdate'];

  // Validação do CPF no PHP
  if (!validateCPF($cpf)) {
    echo 'CPF inválido';
    exit;
  }

  // Verificar se o nome de usuário já está em uso
  if (checkUsernameExists($username)) {
    echo 'Nome de usuário já cadastrado. Por favor, escolha outro nome de usuário.';
    exit;
  }

  // Adicionar usuário à lista (estrutura de dados)
  $user = [
    'name' => $name,
    'username' => $username,
    'email' => $email,
    'cpf' => $cpf,
    'birthdate' => $birthdate
  ];

  // Adicionar usuário à lista na página
  echo json_encode($user);
}

 // Implementação da validação do CPF em PHP
  function validateCPF($cpf) {
  // Remover caracteres especiais do CPF
  $cpf = preg_replace('/[^0-9]/', '', $cpf);

  // Verificar se o CPF tem 11 dígitos
  if (strlen($cpf) !== 11) {
    return false;
  }

  // Verificar se todos os dígitos são iguais (ex: 11111111111)
  if (preg_match('/^(\d)\1+$/', $cpf)) {
    return false;
  }

  // Validar os dígitos verificadores
  $sum = 0;
  for ($i = 0; $i < 9; $i++) {
    $sum += intval($cpf[$i]) * (10 - $i);
  }
  $remainder = ($sum * 10) % 11;

  if ($remainder === 10 || $remainder === 11) {
    $remainder = 0;
  }

  if ($remainder !== intval($cpf[9])) {
    return false;
  }

  $sum = 0;
  for ($i = 0; $i < 10; $i++) {
    $sum += intval($cpf[$i]) * (11 - $i);
  }
  $remainder = ($sum * 10) % 11;

  if ($remainder === 10 || $remainder === 11) {
    $remainder = 0;
  }

  if ($remainder !== intval($cpf[10])) {
    return false;
  }

  return true;
  }
  return true; // Altere para a validação real do CPF

function checkUsernameExists($username) {
  // Verificar se o nome de usuário já está em uso
  $userList = getUsersList();
  foreach ($userList as $user) {
    if ($user['username'] === $username) {
      return true;
    }
  }
  return false;
}

function getUsersList() {
  // Retorna a lista fictícia de usuários
  return [
    [
      'name' => 'João',
      'username' => 'joao123',
      'email' => 'joao@example.com',
      'cpf' => '12345678901',
      'birthdate' => '1990-01-01'
    ],
    [
      'name' => 'Maria',
      'username' => 'maria456',
      'email' => 'maria@example.com',
      'cpf' => '98765432109',
      'birthdate' => '1995-05-05'
    ],
    [
      'name' => 'Pedro',
      'username' => 'pedro789',
      'email' => 'pedro@example.com',
      'cpf' => '54321678901',
      'birthdate' => '1988-12-31'
    ]
  ];
}
?>

?>


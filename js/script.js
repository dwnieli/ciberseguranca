// gerador de senha

function gerarSenha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&-+=/*';
  const comprimento = 16;

  const array = new Uint32Array(comprimento);
  crypto.getRandomValues(array);

  const senha = Array.from(array, n => chars[n % chars.length]).join('');

  document.getElementById('password').textContent = senha;
}


function copiarSenha() {
  const senha = document.getElementById('password').textContent;

  if (senha === '***********') return;

  navigator.clipboard.writeText(senha).then(() => {
    const btn = document.getElementById('copiar');
    btn.textContent = 'Copiado!';
  });
}
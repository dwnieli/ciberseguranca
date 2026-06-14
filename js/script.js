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


// fontes
function limparSenha() {
  document.getElementById('password').textContent = '***********';

  const btn = document.getElementById('copiar');
  if (btn) {
    btn.textContent = 'Copiar senha';
  }
}

// fontes
function aumentarFonte() {
  document.documentElement.classList.remove("textoNormal", "diminuirTexto")
  document.documentElement.classList.add("aumentarTexto")
}

function fonteNormal() {
  document.documentElement.classList.remove("aumentarTexto", "diminuirTexto")
  document.documentElement.classList.add("textoNormal")
}

function diminuirFonte() {
  document.documentElement.classList.remove("textoNormal", "aumentarTexto")
  document.documentElement.classList.add("diminuirTexto")
}

// darkmode
function mudarTema() {
  document.documentElement.classList.toggle("darkmode")

  const icone = document.querySelector(".material-symbols-outlined.mudarTema")

  if (document.documentElement.classList.contains("darkmode")) {
    icone.textContent = "light_mode"
  } else {
    icone.textContent = "dark_mode"
  }
}
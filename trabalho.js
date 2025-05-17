export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  if (typeof nome !== 'string' || nome.trim() === '') {
    throw new Error('Nome inválido');
  }

  if (typeof idade !== 'number' || idade <= 0) {
    throw new Error('Idade inválida');
  }

  if (typeof peso !== 'number' || peso <= 0) {
    throw new Error('Peso inválido');
  }

  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
  };
  return atividades[porte] || 'porte não reconhecido';
}

export async function buscarDadoAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}

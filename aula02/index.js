/*
Objetivo:
0 - Obter um usuario
1 - Obter o núermo de telefone de um usuário a partir de seu ID
2 - Obter o endereço de usuario pelo ID
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: "Matheus",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "1199002",
      ddd: 11,
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos noias",
      numero: 10,
    });
  }, 2000);
}

function resolverUsuario(error, usuario) {
  console.log("usuario", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  //null || "" || 0 === false
  if (error) {
    console.log("Deu ruim no usuario", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log("Deu ruim no telefone", error1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereço(error2, endereco) {
      if (error2) {
        console.log("Deu ruim no endereço", error2);
        return;
      }

      console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}

        `);
    });
  });
});

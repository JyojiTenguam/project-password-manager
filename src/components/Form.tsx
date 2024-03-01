import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="service-name">Nome do Serviço</label>
      <input id="service-name" type="text" />

      <label htmlFor="login">Login</label>
      <input id="login" type="text" />

      <label htmlFor="password">Senha</label>
      <input id="password" type="password" />

      <label htmlFor="url">URL</label>
      <input id="url" type="text" />

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;

import React, { useState } from 'react';

type FormProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // * funcao que recebe event e retorna nada
  handleInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void; // * funcao que recebe event e retorna nada
  handleSendBtnClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // * funcao que recebe event e retorna nada
  data: { // * objeto
    'service-name': string;
    login: string;
    password: string;
    url: string;
  };
  validateForm: () => boolean; // * funcao que recebe nada e retorna true ou false (boolean)
};

function Form() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(true);

  return (
    <>
      {isFormVisible && (
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
          <button onClick={() => {
            setIsFormVisible(false);
            setIsButtonVisible(true);
          }}>Cancelar</button>
        </form>
      )}
      {isButtonVisible && (
        <button onClick={() => setIsButtonVisible(false)}>Cadastrar nova senha</button>
      )}
    </>
  );
}

export default Form;

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
  const [serviceName, setServiceName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasValidLength = password.length >= 8 && password.length <= 16;
  return (
    <>
      {isFormVisible && (
        <form>
          <label htmlFor="service-name">Nome do Serviço</label>
          <input id="service-name" type="text" onChange={data => setServiceName(data.target.value)} />

          <label htmlFor="login">Login</label>
          <input id="login" type="text" onChange={data => setLogin(data.target.value)} />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" onChange={data => setPassword(data.target.value) } />

          <label htmlFor="url">URL</label>
          <input id="url" type="text" onChange={data => setUrl(data.target.value)} />

          <button disabled={!serviceName || !login || !password || !url || !hasValidLength ||!hasNumber || !hasLetter || !hasSpecialChar}>Cadastrar</button>
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

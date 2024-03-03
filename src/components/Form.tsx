import React, { useState } from 'react';

type FormProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // * funcao que recebe event e retorna nada
  handleInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void; // * funcao que recebe event e retorna nada
  handleSendBtnClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // * funcao que recebe event e retorna nada
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
  const [services, setServices] = useState<{ 'service-name': string; login: string; password: string; url: string; }[]>([]);
  return (
    <>
      {isFormVisible && (
        <form>
          <label htmlFor="service-name">Nome do Serviço</label>
          <input id="service-name" type="text" onChange={data => setServiceName(data.target.value)} />

          <label htmlFor="login">Login</label>
          <input id="login" type="text" onChange={data => setLogin(data.target.value)} />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" onChange={data => setPassword(data.target.value)} />
          <div>
            <p className={hasValidLength ? 'valid-password-check' : 'invalid-password-check'}>
              Possuir 8 ou mais caracteres
            </p>
            <p className={hasValidLength ? 'valid-password-check' : 'invalid-password-check'}>
              Possuir até 16 caracteres
            </p>
            <p className={hasNumber && hasLetter ? 'valid-password-check' : 'invalid-password-check'}>
              Possuir letras e números
            </p>
            <p className={hasSpecialChar ? 'valid-password-check' : 'invalid-password-check'}>
              Possuir algum caractere especial
            </p>
          </div>

          <label htmlFor="url">URL</label>
          <input id="url" type="text" onChange={data => setUrl(data.target.value)} />

          <button
            disabled={!serviceName || !login || !password || !url || !hasValidLength || !hasNumber || !hasLetter || !hasSpecialChar}
            onClick={() => {
              const newService = {
                'service-name': serviceName,
                login: login,
                password: password,
                url: url
              };
              setServices([...services, newService]);
              setServiceName('');
              setLogin('');
              setPassword('');
              setUrl('');
              setIsFormVisible(false);
              setIsButtonVisible(true);
            }}
          >Cadastrar</button>

          <button onClick={() => {
            setServiceName('');
            setLogin('');
            setPassword('');
            setUrl('');
            setIsFormVisible(false);
            setIsButtonVisible(true);
          }}>Cancelar</button>
        </form>
      )}
      {
        isButtonVisible && (
          <button onClick={() => {
            setIsButtonVisible(false);
            setIsFormVisible(true);
          }}>Cadastrar nova senha</button>
        )
      }
      {services.length === 0
        ? <p>Nenhuma senha cadastrada</p>
        : services.map((service, index) => (
          <div key={index}>
            <a href={service.url}>Nome do serviço: {service['service-name']}</a>
            <p>Login: {service.login}</p>
            <p>Senha: {service.password}</p>
            <p>URL: {service.url}</p>
          </div>
        ))
      }
    </>
  );
}

export default Form;

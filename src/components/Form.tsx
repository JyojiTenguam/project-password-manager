import React, { useState } from 'react';

const validPassword = 'valid-password-check';
const invalidPassword = 'invalid-password-check';

const validateToMe = (
  {
    serviceName,
    login,
    password,
    url,
    hasValidLength,
    hasNumber,
    hasLetter,
    hasSpecialChar,
  }: {
    serviceName: string,
    login: string,
    password: string,
    url: string,
    hasValidLength: boolean,
    hasNumber: boolean,
    hasLetter: boolean,
    hasSpecialChar: boolean,
  },
) => {
  return !serviceName || !login || !password || !url
  || !hasValidLength || !hasNumber || !hasLetter || !hasSpecialChar;
};

function Form() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [check, setCheck] = useState(false);
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasValidLength = password.length >= 8 && password.length <= 16;
  const [services, setServices] = useState<{
    'service-name': string; login: string; password: string; url: string; }[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleRemove(index: number) {
    const newServices = services
      .filter((service, serviceIndex) => serviceIndex !== index);
    setServices(newServices);
  }

  return (
    <>
      {isFormVisible && (
        <form>
          <label htmlFor="service-name">Nome do Serviço</label>
          <input
            id="service-name"
            type="text"
            onChange={ (data) => setServiceName(data.target.value) }
          />

          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            onChange={ (data) => setLogin(data.target.value) }
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type={ showPassword ? 'text' : 'password' }
            onChange={ (data) => setPassword(data.target.value) }
          />
          <button
            type="button"
            data-testid="show-hide-form-password"
            onClick={ toggleShowPassword }
          >
            {showPassword ? 'Esconder' : 'Mostrar'}
          </button>
          <div>
            <p
              className={ hasValidLength
                ? validPassword : invalidPassword }
            >
              Possuir 8 ou mais caracteres
            </p>
            <p
              className={ hasValidLength
                ? validPassword : invalidPassword }
            >
              Possuir até 16 caracteres
            </p>
            <p
              className={ hasNumber && hasLetter
                ? validPassword : invalidPassword }
            >
              Possuir letras e números
            </p>
            <p
              className={ hasSpecialChar
                ? validPassword : invalidPassword }
            >
              Possuir algum caractere especial
            </p>
          </div>

          <label htmlFor="url">URL</label>
          <input id="url" type="text" onChange={ (data) => setUrl(data.target.value) } />

          <button
            disabled={ validateToMe({
              serviceName,
              login,
              password,
              url,
              hasValidLength,
              hasNumber,
              hasLetter,
              hasSpecialChar,
            }) }
            onClick={ () => {
              const newService = {
                'service-name': serviceName,
                login,
                password,
                url,
              };
              setServices([...services, newService]);
              setServiceName('');
              setLogin('');
              setPassword('');
              setUrl('');
              setIsFormVisible(false);
              setIsButtonVisible(true);
            } }
          >
            Cadastrar
          </button>

          <button
            onClick={ () => {
              setServiceName('');
              setLogin('');
              setPassword('');
              setUrl('');
              setIsFormVisible(false);
              setIsButtonVisible(true);
            } }
          >
            Cancelar
          </button>
        </form>
      )}
      {
  isButtonVisible && (
    <button
      onClick={ () => {
        setIsButtonVisible(false);
        setIsFormVisible(true);
      } }
    >
      Cadastrar nova senha
    </button>
  )
}
      <label htmlFor="hide-passwords">Esconder senhas</label>
      <input
        type="checkbox"
        id="hide-passwords"
        onChange={ (data) => setCheck(data.target.checked) }
      />
      {services.length === 0
        ? <p>Nenhuma senha cadastrada</p>
        : services.map((service, index) => (
          <div key={ index }>
            <a href={ service.url }>
              Nome do serviço:
              {service['service-name']}
            </a>
            <p>
              Login:
              {service.login}
            </p>
            <p>
              Senha:
              {check ? '******' : service.password}
            </p>
            <p>
              URL:
              {service.url}
            </p>
            <button data-testid="remove-btn" onClick={ () => handleRemove(index) }>
              Remover
            </button>
          </div>
        ))}
    </>
  );
}

export default Form;

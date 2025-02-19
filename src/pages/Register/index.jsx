import * as Styled from './styles';

import { useState } from 'react';

import { HeaderContainer } from '../../components/headerContainer';
import { CreateAccount } from '../../components/createAccount';
import { CreatePassword } from '../../components/createPassword';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Link } from 'react-router';

export const Register = () => {
  const [isMounted, setIsMounted] = useState('Account');
  let component;

  const handleClickComponent = (isMounted) => {
    setIsMounted(isMounted);
  };

  switch (isMounted) {
    case 'Account':
      component = <CreateAccount handleClick={handleClickComponent} />;
      break;
    case 'Password':
      component = <CreatePassword handleClick={handleClickComponent} />;
      break;
    case 'accountCreated':
      component = (
        <section className="accountCreated">
          <Header
            title="Conta criada com sucesso!"
            descripton="Seja bem-vindo ao ThreeD Hub 🎉. Agora, você já pode solicitar novos pedidos."
          />
          <Button>
            <Link to="/home">Avançar</Link>
          </Button>
        </section>
      );
      break;
    default:
      <h1>Erro 404 - Pagina não encontrada</h1>
      break;
  }

  return (
    <Styled.Container>
      <HeaderContainer isMenu={false} />
      {component}
    </Styled.Container>
  );
};

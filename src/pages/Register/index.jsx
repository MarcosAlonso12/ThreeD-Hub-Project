import * as Styled from './styles';

import { useState } from 'react';
import { Link } from 'react-router';

import { HeaderContainer } from '../../components/headerContainer';
import { CreateAccount } from '../../components/createAccount';
import { CreatePassword } from '../../components/createPassword';
import { ActionPerformed } from '../../components/actionPerformed';

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
        <ActionPerformed
          title="Conta criada com sucesso!"
          descripton="Seja bem-vindo ao ThreeD Hub 🎉. Agora, você já pode solicitar novos pedido"
        >
          <Link to="/home">Avançar</Link>
        </ActionPerformed>
      );
      break;
    default:
      <h1>Erro 404 - Pagina não encontrada</h1>;
      break;
  }

  return (
    <Styled.Container>
      <HeaderContainer isMenu={false} />
      {component}
    </Styled.Container>
  );
};

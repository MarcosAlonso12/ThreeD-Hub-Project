import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../button';
import { Header } from '../header';
import { Input } from '../input';

export const CreateAccount = ({ handleClick }) => {
  return (
    <Styled.Container>
      <Header
        title="Criar conta"
        descripton="Para criar sua conta, é necessário preencher os campos  a seguir:"
      />

      <Styled.Form>
        <Input name="Nome completo">
          <input type="text" />
        </Input>
        <Input name="Email">
          <input type="email" />
        </Input>
        <Input name="Número de Telefone">
          <input type="tel" />
        </Input>
        <Input name="Instituição onde trabalha">
          <input type="text" />
        </Input>

        <Button>
          <button onClick={() => handleClick('Password')}>Criar Conta</button>
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

CreateAccount.propTypes = {
  handleClick: P.node.isRequired,
};

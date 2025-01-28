import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../button';
import { Header } from '../header';
import { Input } from '../input';

export const CreatePassword = ({ handleClick }) => {
  return (
    <Styled.Container>
      <Header
        title="Criar senha"
        descripton="A senha deve ter no minímo 8 digítos,  misturando números, símbolos e letras maiúsculas e minúsculas."
      />
      <Styled.Form>
        <Input name="Senha">
          <input type="password" />
        </Input>
        <Input name="Confirmar Senha">
          <input type="password" />
        </Input>

        <Button>
          <button onClick={() => handleClick('accountCreated')}>
            Criar Senha
          </button>
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

CreatePassword.propTypes = {
  handleClick: P.func.isRequired,
};

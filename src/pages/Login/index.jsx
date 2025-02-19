import * as Styled from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Link } from 'react-router';

export const Login = () => {
  return (
    <Styled.Container>
      <img src="assets/Logo.svg" alt="logo do ThreeD-Hub" />
      <Styled.Form>
        <Input name="E-mail">
          <input type="email" />
        </Input>
        <Input name="Senha">
          <input type="password" />
        </Input>
        <Button>
          <Link to="/home">Realizar login</Link>
        </Button>
      </Styled.Form>

      <Link to="/register">Não possui conta? Crie uma agora!</Link>
    </Styled.Container>
  );
};

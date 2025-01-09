import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

export const Login = ({ children }) => {
  return (
    <Styled.Container>
      <img src="assets/Logo.svg" alt="logo do ThreeD-Hub" />
      <Styled.Form>
        <Input name="E-mail" type="text" />
        <Input name="Senha" type="password" />
        <Button name="Realizar login" type="submit" />
      </Styled.Form>
      <a href="#">Não possui conta? Crie uma agora!</a>
    </Styled.Container>
  );
};

Login.propTypes = {
  children: P.node.isRequired,
};

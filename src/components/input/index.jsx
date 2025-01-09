import P from 'prop-types';
import * as Styled from './styles';

export const Input = ({ name, type }) => {
  return (
    <Styled.Container>
      <span>{name}</span>
      <Styled.Input type={type} />
    </Styled.Container>
  );
};

Input.propTypes = {
  name: P.string,
  type: P.string,
};

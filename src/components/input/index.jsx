import P from 'prop-types';
import * as Styled from './styles';

export const Input = ({ name, children, width, heigth }) => {
  return (
    <Styled.Container width={width} height={heigth}>
      <span>{name}</span>
      {children}
    </Styled.Container>
  );
};

Input.propTypes = {
  name: P.string,
  children: P.node.isRequired,
  width: P.string,
  heigth: P.string,
};

import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ name, type }) => {
  return <Styled.Button type={type}>{name}</Styled.Button>;
};

Button.propTypes = {
  name: P.string,
  type: P.string,
};

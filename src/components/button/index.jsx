import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, type }) => {
  return <Styled.Button type={type}>{children}</Styled.Button>;
};

Button.propTypes = {
  children: P.node,
  type: P.string,
};

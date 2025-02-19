import P from 'prop-types';
import * as Styled from './styles';

import { Button } from '../../components/button';
import { Header } from '../../components/header';

export const ActionPerformed = ({ title, descripton, children }) => {
  return (
    <Styled.Container>
      <Header title={title} descripton={descripton} />
      <Button>{children}</Button>
    </Styled.Container>
  );
};

ActionPerformed.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  descripton: P.string.isRequired,
};

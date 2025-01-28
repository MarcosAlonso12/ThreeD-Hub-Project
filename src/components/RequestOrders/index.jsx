import P from 'prop-types';
import * as Styled from './styles';

import { BsFillBoxSeamFill } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';

export const RequestOrders = ({ children }) => {
  const [hasOrdes, setHasOrdes] = useState(false);

  return (
    <Styled.Container>
      <Styled.Title>
        <h1>Solicitações</h1>
        <CiFilter size={25} />
      </Styled.Title>
      {hasOrdes == false && (
        <Styled.NoOrdes>
          <BsFillBoxSeamFill size={80} />
          <span>Você não possui solicitações em análise.</span>
        </Styled.NoOrdes>
      )}
      {hasOrdes}
      <Styled.NewOrder>
        <IoIosAdd size={40} color="#fff" />
      </Styled.NewOrder>
    </Styled.Container>
  );
};

RequestOrders.propTypes = {
  children: P.node.isRequired,
};

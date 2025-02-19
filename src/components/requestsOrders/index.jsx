import P from 'prop-types';
import * as Styled from './styles';

import { BsFillBoxSeamFill } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';

export const RequestOrders = ({ handleComponent }) => {
  const [order, serOrder] = useState('');

  return (
    <Styled.Container>
      <Styled.Title>
        <h1>Solicitações</h1>
        <CiFilter size={25} />
      </Styled.Title>
      {order.length == 0 && (
        <Styled.NoOrdes>
          <BsFillBoxSeamFill size={80} />
          <span>Você não possui solicitações em análise.</span>
        </Styled.NoOrdes>
      )}
      {order.length != 0 && order}
      <Styled.NewOrder onClick={() => handleComponent('newRequest')}>
        <IoIosAdd size={40} color="#fff" />
      </Styled.NewOrder>
    </Styled.Container>
  );
};

RequestOrders.propTypes = {
  handleComponent: P.func.isRequired,
};

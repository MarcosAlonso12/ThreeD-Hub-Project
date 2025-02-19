import P from 'prop-types';
import * as Styled from './styles';

import { BsFillBoxSeamFill } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import { IoIosAdd } from 'react-icons/io';
import { Order } from '../order';

export const RequestOrders = ({ handleComponent, orders }) => {
  return (
    <Styled.Container>
      <Styled.Title>
        <h1>Solicitações</h1>
        <CiFilter size={25} />
      </Styled.Title>
      {orders === 0 && (
        <Styled.NoOrdes>
          <BsFillBoxSeamFill size={80} />
          <span>Você não possui solicitações em análise.</span>
        </Styled.NoOrdes>
      )}
      {orders !== 0 && (
        <Styled.Orders>
          <Order
            title="Suporte de Celular"
            data="15/12/2022"
            situacao="Aprovado"
          />
          <Order title="Suporte de Fone" data="01/03/2023" situacao="Negado" />
          <Order
            title="Suporte de Tablet"
            data="01/02/2023"
            situacao="Análise"
          />
        </Styled.Orders>
      )}
      <Styled.NewOrder onClick={() => handleComponent('newRequest')}>
        <IoIosAdd size={40} color="#fff" />
      </Styled.NewOrder>
    </Styled.Container>
  );
};

RequestOrders.propTypes = {
  handleComponent: P.func.isRequired,
  orders: P.array.isRequired,
};

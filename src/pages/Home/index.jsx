import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';

import { HeaderContainer } from '../../components/headerContainer';
import { NewRequest } from '../../components/newRequest';
import { RequestOrders } from '../../components/requestsOrders';
import { ActionPerformed } from '../../components/actionPerformed';

export const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('requests');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [orders, setOrders] = useState(0);

  const handleSelectedComponent = (componente) => {
    setSelectedComponent(componente);
  };

  const handleMenu = (isMounted) => {
    setMenuOpen(!isMounted);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Styled.Container>
      <HeaderContainer
        isMenu={true}
        menuRef={menuRef}
        menuOpen={menuOpen}
        handleMenu={handleMenu}
        handleSelectedComponent={handleSelectedComponent}
      />

      {selectedComponent === 'requests' && (
        <RequestOrders
          orders={orders}
          handleComponent={handleSelectedComponent}
        />
      )}
      {selectedComponent === 'newRequest' && (
        <NewRequest
          orders={orders}
          setOrders={setOrders}
          handleComponent={handleSelectedComponent}
        />
      )}
      {selectedComponent === 'acitionPerformed' && (
        <ActionPerformed
          title="Pedido #001 realizado com sucesso!"
          descripton="Você pode acompanhar o seu pedido na aba de pedidos."
        >
          <button onClick={() => handleSelectedComponent('requests')}>
            Avança
          </button>
        </ActionPerformed>
      )}
      {selectedComponent === 'account' && ''}
    </Styled.Container>
  );
};

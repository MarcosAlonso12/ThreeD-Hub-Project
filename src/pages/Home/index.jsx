import P from 'prop-types';
import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';

import { HeaderContainer } from '../../components/headerContainer';
import { RequestOrders } from '../../components/RequestOrders';

export const Home = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState('pedidos');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

      {selectedComponent == 'pedidos' && <RequestOrders />}
      {selectedComponent == 'conta' && ''}
    </Styled.Container>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
};

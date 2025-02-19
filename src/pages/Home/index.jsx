import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';

import { HeaderContainer } from '../../components/headerContainer';
import { NewRequest } from '../../components/newRequest';
import { RequestOrders } from '../../components/requestsOrders';

export const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('requests');
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

      {selectedComponent == 'requests' && (
        <RequestOrders handleComponent={handleSelectedComponent} />
      )}
      {selectedComponent == 'newRequest' && <NewRequest />}
      {selectedComponent == 'account' && ''}
    </Styled.Container>
  );
};

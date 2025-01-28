import P from 'prop-types';
import * as Styled from './styles';

import { TfiMenu } from 'react-icons/tfi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router';

export const Menu = ({
  handleSelectedComponent,
  menuOpen,
  handleMenu,
  menuRef,
}) => {
  return (
    <Styled.Container ref={menuRef} onClick={() => handleMenu(menuOpen)}>
      {menuOpen ? <IoMdClose size={30} /> : <TfiMenu size={30} />}
      {menuOpen ? (
        <Styled.ContainerMenu>
          <nav>
            <Link onClick={() => handleSelectedComponent('pedidos')}>
              Meus pedidos
            </Link>
            <Link onClick={() => handleSelectedComponent('conta')}>
              Minha conta
            </Link>
            <Link to="/">Sair</Link>
          </nav>
        </Styled.ContainerMenu>
      ) : (
        ''
      )}
    </Styled.Container>
  );
};

Menu.propTypes = {
  linkClicked: P.string.isRequired,
  handleSelectedComponent: P.func.isRequired,
  menuOpen: P.bool.isRequired,
  handleMenu: P.func.isRequired,
  menuRef: P.shape({ current: P.instanceOf(Element) }),
};

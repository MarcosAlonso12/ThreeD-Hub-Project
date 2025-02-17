import P from 'prop-types';
import * as Styled from './styles';

import { Header } from '../header';
import { FormRequest } from '../formRequest';
import { ImageRequest } from '../imageRequest';
import { Button } from '../button';
import { useState } from 'react';

export const NewRequest = ({ children }) => {
  const [formSelected, setformSelected] = useState('form');
  const [images, setImage] = useState([]);

  const handleFomr = () => {
    const selected = formSelected == 'form' ? 'formImage' : 'form';
    setformSelected(selected);
  };

  return (
    <Styled.Container>
      {formSelected == 'form' && (
        <Header
          title="Realizar Pedido"
          descripton="Preencha o formulário abaixo para realizar sua solicitação."
        />
      )}
      {formSelected == 'formImage' && (
        <Header
          title="Realizar Pedido"
          descripton="Adicione imagens do objeto que deseja obter."
        />
      )}
      <Styled.FormContainer onClick={() => handleFomr()}>
        <span className={formSelected == 'form' ? 'selected' : ''}>
          Formulário
        </span>
        <span className={formSelected == 'formImage' ? 'selected' : ''}>
          Imagens
        </span>
      </Styled.FormContainer>
      {formSelected == 'form' && <FormRequest />}
      {formSelected == 'formImage' && (
        <ImageRequest images={images} setImage={setImage} />
      )}
      <Button>
        <button className="button">Realizar pedido</button>
      </Button>
    </Styled.Container>
  );
};

NewRequest.propTypes = {
  children: P.node.isRequired,
};

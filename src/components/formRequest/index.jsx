import P from 'prop-types';
import * as Styled from './styles';
import { Input } from '../input';

export const FormRequest = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Form>
        <Input name="Nome do Pedido">
          <input type="text" placeholder="Ex: Suporte de celular" />
        </Input>
        <Input name="Descrição">
          <input
            className="inputLarg"
            type="text"
            placeholder="Ex: Um suporte de celular, com 10cm de altura."
          />
        </Input>
        <Input name="Justificativa">
          <input
            className="inputLarg"
            type="text"
            placeholder="Ex: Preciso desse suporte para trabalho"
          />
        </Input>
        <Input name="Cor" width="70%">
          <select name="cor">
            <option value="" selected>
              Selecione uma opção
            </option>
            <option value="">opção 1</option>
            <option value="">opção 2</option>
          </select>
        </Input>
        <Input name="Quantidade" width="25%">
          <input type="text" placeholder="Ex: 10" />
        </Input>
        <Input name="Material">
          <select name="material">
            <option value="" selected>
              Selecione uma opção
            </option>
            <option value="">opção 1</option>
            <option value="">opção 2</option>
          </select>
        </Input>
        <Input name="Contrapartida">
          <select name="contrapartida">
            <option value="" selected>
              Selecione uma opção
            </option>
            <option value="">opção 1</option>
            <option value="">opção 2</option>
          </select>
        </Input>
      </Styled.Form>
    </Styled.Container>
  );
};

FormRequest.propTypes = {
  children: P.node.isRequired,
};

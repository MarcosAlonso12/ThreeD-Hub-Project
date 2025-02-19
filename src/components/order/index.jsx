import P from 'prop-types';
import * as Styled from './styles';

export const Order = ({ title, data, situacao }) => {
  return (
    <Styled.Container situacao={situacao}>
      <div>
        <h2>{title}</h2>
        <span>Solitado em: {data}</span>
      </div>
      <p>{situacao}</p>
    </Styled.Container>
  );
};

Order.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  data: P.string.isRequired,
  situacao: P.string.isRequired,
};

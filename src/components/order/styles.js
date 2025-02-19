import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme, situacao }) => css`
  background-color: ${theme.colors.lightGray};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.spacings.medium};

  h2 {
    font-size: ${theme.fonts.sizes.small};
  }

  span {
    font-size: ${theme.fonts.sizes.xsamll};
  }

  p {
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.white};
    background-color: ${situacao === 'Aprovado' ? theme.colors.primary : situacao === 'Negado' ? theme.colors.red : situacao === 'Análise' ? theme.colors.yellow : ''};
    padding: 6.5px 16px;
    border-radius: 16px;
  }
`}
`;

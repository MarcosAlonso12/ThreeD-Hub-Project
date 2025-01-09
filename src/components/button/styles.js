import styled, { css } from 'styled-components';

export const Button = styled.button`
${({ theme }) => css`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 16px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
`}
`;

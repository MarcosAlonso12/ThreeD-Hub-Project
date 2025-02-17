import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`

  .button {
    margin-top: 28px;
  }
`}
`;

export const FormContainer = styled.section`
${({ theme }) => css`
  width: 100%;
  margin-top: ${theme.spacings.xxmedium};
  padding-bottom: 6px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 3px solid ${theme.colors.primary};
  color: ${theme.colors.green.light};
  font-size: ${theme.fonts.sizes.small};
  font-weight: medium;
  .selected {
    color: ${theme.colors.green.dark};
  }
`}
`;

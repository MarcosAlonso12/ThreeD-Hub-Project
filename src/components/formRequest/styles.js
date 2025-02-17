import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  margin-top:${theme.spacings.xxmedium};
`}
`;

export const Form = styled.form`
${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.small};
  width: 100%;
`}
`;

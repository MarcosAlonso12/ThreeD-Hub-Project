import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  margin-top: 14px;
  .inputChange {
    display: none;
  }
`}
`;

export const ImageConteiner = styled.div`
${({ theme }) => css`
margin-top: ${theme.spacings.medium};
  background-color: ${theme.colors.lightGray};
  border-radius: 16px;
  text-align: center;
  img {
    width: 80%
  }
  button {
    width: 80%;
    margin-bottom: ${theme.spacings.small};
  }
`}
`;

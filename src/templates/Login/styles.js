import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  height: 100vh;
  padding: ${theme.spacings.xxlarge} 39px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 81px;
  };

  a {
    font-size: ${theme.fonts.sizes.xsamll};
    color: ${theme.colors.gray};
    text-decoration: none;
    margin-top: ${theme.spacings.xmedium};
  }
`}
`;

export const Form = styled.form`
${({ theme }) => css`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${theme.spacings.large};

  Button {
    margin-top: 12px;
  }
`}
`;

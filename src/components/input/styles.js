import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme, width, heigth }) => css`
  display:flex;
  flex-direction: column;
  width: ${width ? width : '100%'};


  span {
    font-size: ${theme.fonts.sizes.xsamll};
    color: ${theme.colors.black};
    font-weight: 600;
  }

  input, select, label{
    height: ${heigth ? heigth : '100%'};
    margin-top: ${theme.spacings.xxsmall};
    border-radius: 16px;
    border: none;
    padding: 12px 8px;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.whiteSecundary};
    font-size: ${theme.fonts.sizes.xsamll}
  }

  label {
    text-align: center;
    padding: 40px 50px;
  }
`}
`;

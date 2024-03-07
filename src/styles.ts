import { createGlobalStyle } from 'styled-components'

export const colors = {
  textPrimary: '#E66767',
  textSecondary: '#FFFFFF',
  textColor: '#FFEBD9',
  overlay: '#000'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '400px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.textSecondary};
    color: ${colors.textPrimary};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakPoints.desktop}){
      max-width: 80vw;
    }
  }
`

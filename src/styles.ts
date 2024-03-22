import styled, { createGlobalStyle } from 'styled-components'

import background from './assets/images/backgroundImg.png'

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
export const HeaderBar = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  position: relative;
  margin-botton: 56px;
  top: 0;
`
export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 54px;

  h1 {
    display: flex;

    img {
      margin: 0 auto;
    }
  }
`

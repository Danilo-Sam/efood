import styled from 'styled-components'
import background from '../../assets/images/backgroundImg.png'

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

export const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 539px;
  height: 84px;
  margin: 0 auto;
  margin-top: 160px;
  vertical-align: inherit;
  text-align: center;
`

import styled from 'styled-components'
import { colors } from '../../styles'
// import { breakPoints } from '../../../styles'

export const ContainerModal = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.6;
  }

  &.itIsNotVisible {
    display: none;
  }
`

export const CardModal = styled.div`
  background-color: ${colors.textPrimary};
  max-width: 1024px;
  width: 100%;
  height: 344px;
  display: inline-flex;
  color: ${colors.textColor};
  z-index: 1;
  position: relative;

  .imgModal {
    margin: 32px 24px 32px 32px;
    width: 280px;
    height: 280px;
  }

  .container {
    h2 {
      display: inline-flex;
      margin-top: 32px;
      font-size: 18px;
      font-weight: 900;
      line-height: 21px;
    }

    img {
      width: 16px;
      height: 16px;
      right: 8px;
      top: 8px;
      cursor: pointer;
      position: absolute;
      // width: 100%;
      // height: 100%;
      // width: 16px;
      // height: 16px;
      // position: absolute;
    }

    p {
      margin: 16px 32px 16px 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    .addToCart {
      color: ${colors.textPrimary};
      backgroung-color: ${colors.textSecondary};
      font-weight: bold;
      font-size: 14px;
      width: 218px;
      height: 24px;
      margin-top: 16px;
      cursor: pointer;
    }
  }
`

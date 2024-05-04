import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { breakPoints, colors } from '../../../styles'

export const CardList = styled.div`
  display: flex;
  background-color: ${colors.textPrimary};
  color: ${colors.textColor};
  flex-direction: column;
  align-items: center;

  img {
    padding: 8px;
  }
`
export const TitleList = styled.h2`
  align-self: flex-start;
  height: 19px;
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const DescriptionList = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weiht: 400;
  line-height: 22px;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const ButtonList = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${colors.textPrimary};
  color: ${colors.textPrimary};
  font-size: 14px;
  margin: 8px;
  border: none;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.itIsNotVisible {
    display: none;
  }

  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const Card = styled.div`
  background-color: ${colors.textPrimary};
  display: flex;
  color: ${colors.textSecondary};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }
  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    height: 95%;
  }
  div {
    margin-top: 32px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 16px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  width: 650px;
  height: 176px;
  margin-bottom: 16px;
  line-height: 1.7;

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: auto;
    line-height: 1.4;
  }
`
export const ToAdd = styled.button`
  background-color: ${colors.textSecondary};
  color: ${colors.textPrimary};
  height: 28px;
  text-algin: center;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 14px;
  border: none;

  @media (max-width: ${breakPoints.tablet}) {
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: ${breakPoints.mobile}) {
    height: auto;
  }
`

export const DivImage = styled.div`
  max-width: 280px;
  width: 100%;
  height: 280px;
  margin: 32px;

  @media (max-width: ${breakPoints.desktop}) {
    max-width: 40%;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: calc(100% - 64px);
    height: 280px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    height: calc(80vw - 64px);
  }
  img {
    width: 100%;
    height: 100%;
  }
`
export const DivContent = styled.div`
  @media (max-width: ${breakPoints.desktop}) {
    width: calc(64px - (40% - 100%));
  }
  @media (max-width: ${breakPoints.tablet}) {
    margin: 0px !important;
    width: 100%;
    padding: 0 32px;
    justify-content: center;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`

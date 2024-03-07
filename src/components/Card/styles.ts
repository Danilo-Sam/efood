import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;
  max-width: 1024px;
  width: 100%;
  heigth: 1290px;
  margin: 0 auto;
  margin-top: 80px;
`
export const CardRestaurante = styled.div`
  width: 472px;
  max -width: 100%;
  height: 398px;
  `

export const CardImage = styled.div`
  display: flex;
  width: 100%;
  height: 217px;
  margin-botton: 8px;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 16px;
  }
`

export const CardDescricao = styled.div`
  display: block;
  max-height: 181px;
  height: 100%;
  border-top: 0;
  border-left: 1px;
  border-bottom: 1px;
  border-right: 1px;
  border-style: solid;
  border-color: ${colors.textPrimary};

  div {
    display: flex;

    h2 {
      font-size: 18px;
      line-height: 21px;
      margin-left: 8px;
      padding-top: 8px;
      padding-bottom: 16px;
    }

    span {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      padding-top: 8px;
      margin-left: 310px;
      margin-right: 8px;
    }

    img {
      max-width: 18px;
      max-height: 18px;
      margin-top: 8px;
    }
  }

  p {
    font-size: 14px;
    margin-right: 8px;
    margin-left: 8px;
    line-height: 22px;
  }
`

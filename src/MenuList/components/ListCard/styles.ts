import styled from 'styled-components'
import { colors } from '../../../styles'

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

export const ButtonList = styled.button`
  width: 304px;
  heigth: 24px
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

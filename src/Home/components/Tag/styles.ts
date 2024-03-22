import styled from 'styled-components'
import { colors } from '../../../styles'

export const TagContainer1 = styled.span`
  display: inline-flex;
  height: 26px;
  background-color: ${colors.textPrimary};
  color: ${colors.textColor};
  font-size: 12px;
  line-height: 15px;
  margin-left: 8px;
  margin-right: 0;
`

export const TagContainer = styled.div`
  background-color: ${colors.textPrimary};
  display: inline-block;
  padding: 4px 6px;
  margin-left: 8px;
  padding: 4px 6px;
  border-radius: 8px;
  align-items: center;
`

export const TextTag = styled.span`
  color: ${colors.textColor};
  font-size: 12px;
  font-weight: bold;
`

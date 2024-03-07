import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  // width: 62px;
  height: 26px;
  background-color: ${colors.textPrimary};
  color: ${colors.textColor};
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  align-items: center;
  padding: ${(props) => (props.padding === 'big' ? '6px 11px' : '6px 4px')};
  border-radius: 8px;
`

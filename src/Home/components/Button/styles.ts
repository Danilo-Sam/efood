import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.textPrimary};
  color: ${colors.textSecondary};
  font-size: 14px;
  margin-top: 16px;
  border: none;
  margin-left: 8px;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  display: inline-flex;
  background-color: ${colors.textPrimary};
  color: ${colors.textSecondary};
  font-size: 14px;
  margin-top: 16px;
  border: none;
  margin-left: 8px;
  padding: 4px 6px;
  border-radius: 4px;
`

import styled from 'styled-components'
import { breakPoints } from '../../../styles'

export const Container = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 0 auto;
  margin-top: 56px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

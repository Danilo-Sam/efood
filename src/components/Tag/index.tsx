import { TagContainer } from './styles'

export type Props = {
  padding?: 'small' | 'big'
  children: string
}

const Tag = ({ children, padding = 'small' }: Props) => (
  <TagContainer padding={padding}>{children}</TagContainer>
)

export default Tag

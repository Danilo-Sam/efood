import { TagContainer, TextTag } from './styles'

export type Props = {
  children?: string
}

const Tag = ({ children }: Props) => (
  <TagContainer>
    <TextTag>{children}</TextTag>
  </TagContainer>
)

export default Tag

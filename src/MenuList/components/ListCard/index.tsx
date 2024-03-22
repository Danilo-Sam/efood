import { ButtonList, CardList, DescriptionList, TitleList } from './styles'

type PropsList = {
  id?: number
  name_product: string
  image_product: string
  description_product: string
}

export default function ListCard({
  name_product,
  image_product,
  description_product
}: PropsList) {
  return (
    <CardList>
      <img src={image_product} alt="" />
      <TitleList>{name_product}</TitleList>
      <DescriptionList>{description_product}</DescriptionList>
      <ButtonList>Adicionar ao carrinho</ButtonList>
    </CardList>
  )
}

import { Product } from '../../models'
import ListCard from '../ListCard'
import { ContainerList } from './styles'

type PropsList = {
  product: Product[]
}

const List = ({ product }: PropsList) => (
  <ContainerList>
    {product.map((product) => (
      <ListCard
        key={product.id}
        id={product.id}
        name_product={product.name_product}
        image_product={product.image_product}
        description_product={product.description_product}
      />
    ))}
  </ContainerList>
)

export default List

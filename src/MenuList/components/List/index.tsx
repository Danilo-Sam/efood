import { Produto } from '../../../views/Home/pages'
import ListCard from '../ListCard'
import { ContainerList } from './styles'

type PropsList = {
  produto: Produto[]
}

const List = ({ produto }: PropsList) => (
  <ContainerList>
    {produto.map((produto) => (
      <ListCard
        key={produto.id}
        id={produto.id}
        name_product={produto.titulo}
        image_product={produto.capa}
        description_product={produto.descricao}
      />
    ))}
  </ContainerList>
)

export default List

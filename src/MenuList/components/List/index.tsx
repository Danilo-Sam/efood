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
        produto={{
          id: produto.id,
          titulo: produto.titulo,
          destacado: produto.destacado,
          tipo: produto.tipo,
          avaliacao: produto.avaliacao,
          descricao: produto.descricao,
          capa: produto.capa,
          cardapio: {
            id: produto.cardapio.id,
            foto: produto.cardapio.foto,
            preco: produto.cardapio.preco,
            nome: produto.cardapio.nome,
            descricao: produto.cardapio.descricao,
            porcao: produto.cardapio.porcao
          }
        }}
      />
    ))}
  </ContainerList>
)

export default List

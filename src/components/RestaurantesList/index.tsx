import { RestauranteContainer, RestauranteItens } from './styles'

import Card from '../../views/Home/components/Card'
import { Produto } from '../../views/Home/pages'

type Props = {
  produto: Produto[]
}

const RestauranteList = ({ produto }: Props) => {
  function tagArray(primary: string, secondary: boolean): string[] {
    const array: string[] = []
    if (secondary === true) {
      array.push('Destaque da semana')
      array.push(primary)
      return array
    }
    array.push(primary)
    return array
  }

  return (
    <RestauranteContainer>
      <RestauranteItens>
        {produto.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            restaurant_name={produto.titulo}
            extra_content={tagArray(produto.tipo, produto.destacado)}
            image={produto.capa}
            score={produto.avaliacao}
            description={produto.descricao}
          />
        ))}
      </RestauranteItens>
    </RestauranteContainer>
  )
}

export default RestauranteList

import { RestauranteContainer, RestauranteItens } from './styles'

import Card from '../../Home/components/Card'
import Produto from '../../Home/models/Produto'

type Props = {
  produto: Produto[]
}

const RestauranteList = ({ produto }: Props) => (
  <RestauranteContainer>
    <RestauranteItens>
      {produto.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          restaurant_name={produto.restaurant_name}
          extra_content={produto.extra_content}
          image={produto.image}
          score={produto.score}
          description={produto.description}
        />
      ))}
    </RestauranteItens>
  </RestauranteContainer>
)

export default RestauranteList

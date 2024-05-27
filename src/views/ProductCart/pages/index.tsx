import { useState } from 'react'

import Header from '../../../components/Header'
import { MainKnowMore } from './styles'
import Restaurant from '../../../model/Restaurant/Restaurant'
import Knowmore from '../KnowMore'
import Menu from '../../../model/Menu/Menu'

const KnowMorePage = () => {
  const [restaurante] = useState<Restaurant>()
  let menu: Menu[] = []

  if (restaurante) {
    const { cardapio } = restaurante
    menu = cardapio
  }

  return (
    <div>
      <Header
        image={restaurante?.capa}
        nationality={restaurante?.tipo}
        restaurantname={restaurante?.titulo}
      />
      <MainKnowMore className="container">
        {menu.map((product) => (
          <Knowmore
            key={product.id}
            id={product.id}
            porcao={product.porcao}
            preco={product.preco}
            nome={product.nome}
            foto={product.foto}
            descricao={product.descricao}
          />
        ))}
      </MainKnowMore>
    </div>
  )
}

export default KnowMorePage

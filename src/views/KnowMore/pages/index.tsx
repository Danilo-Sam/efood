/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from 'react-router-dom'

import Header from '../../../components/Header'
import { MainKnowMore } from './styles'
import Menu from '../../../model/Menu/Menu'
import { useGetRestaurantByIdQuery } from '../../../services/api'
import ProductCard from '../Components/ProductCard'

const KnowMorePage = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantByIdQuery(id!)
  let menu: Menu[] = []

  if (restaurant) {
    const { cardapio } = restaurant
    menu = cardapio
  }

  return (
    <div>
      <Header
        image={restaurant?.capa}
        nationality={restaurant?.tipo}
        restaurantname={restaurant?.titulo}
      />
      <MainKnowMore className="container">
        {menu.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            foto={product.foto}
            preco={product.preco}
            nome={product.nome}
            descricao={product.descricao}
            porcao={product.porcao}
          />
        ))}
        {/* {menu.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            porcao={product.porcao}
            preco={product.preco}
            nome={product.nome}
            foto={product.foto}
            descricao={product.descricao}
          />
        ))} */}
      </MainKnowMore>
    </div>
  )
}

export default KnowMorePage

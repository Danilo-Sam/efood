// import Header from '../../../components/Header'
// // import List from '../../components/List'
// import Footer from '../../../components/Footer'

// // import apresentacao from '../../../assets/images/apresentacao.png'
// import { Produto } from '../../../views/Home/pages'
// import Knowmore from '../../../views/ProductCart/KnowMore'
// import Menu from '../../../model/Menu/Menu'
// // import { useParams } from 'react-router-dom'
// // import { useGetRestaurantByIdQuery } from '../../../services/api'

// type Props = {
//   produto: Produto
//   menu: Menu[]
// }

// const Cardapio = ({ produto, menu }: Props) => {
//   //   const { id } = useParams()

//   //   const { data: restaurant } = useGetRestaurantByIdQuery(id!)
//   //   let menu: Menu[] = []

//   //   if (restaurant) {
//   //     const { cardapio } = restaurant
//   //     menu = cardapio
//   //   }

//   ;<>
//     <Header
//       image={produto.capa}
//       nationality={produto.tipo}
//       restaurantname={produto.titulo}
//     />
//     {menu.map(() => (
//       // <Knowmore
//       //   key={produto.id}
//       //   id={produto.cardapio.id}
//       //   porcao={produto.cardapio.porcao}
//       //   preco={produto.cardapio.preco}
//       //   nome={produto.cardapio.nome}
//       //   foto={produto.cardapio.foto}
//       //   descricao={produto.descricao}
//       // />
//       <Knowmore
//         key={produto.id}
//         id={produto.id}
//         foto={produto.cardapio.foto}
//         preco={produto.cardapio.preco}
//         nome={produto.cardapio.nome}
//         descricao={produto.cardapio.descricao}
//         porcao={produto.cardapio.porcao}
//       />
//     ))}
//     <Footer />
//   </>
// }

// export default Cardapio

import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Knowmore from '../../../views/ProductCart/KnowMore'
import { Produto } from '../../../views/Home/pages'

type Props = {
  produto: Produto
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Cardapio: React.FC<Props> = ({ produto }) => {
  const { cardapio } = produto

  return (
    <>
      <Header
        image={produto.capa}
        nationality={produto.tipo}
        restaurantname={produto.titulo}
      />
      <Knowmore
        key={cardapio.id}
        id={cardapio.id}
        porcao={cardapio.porcao}
        preco={cardapio.preco}
        nome={cardapio.nome}
        foto={cardapio.foto}
        descricao={cardapio.descricao}
      />
      <Footer />
    </>
  )
}

export default Cardapio

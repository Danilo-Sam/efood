// import { useEffect, useState } from 'react'
// import Header from '../../../components/Header'
// import Knowmore from '../../../views/KnowMore/ProductCart'
// import Restaurant from '../../../model/Restaurant/Restaurant'
// import { useParams } from 'react-router-dom'
// import { Container } from './styles'

// const Cardapio = () => {
//   const { id } = useParams()
//   const [restaurante, setRestaurante] = useState<Restaurant>()

//   useEffect(() => {
//     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setRestaurante(res)
//       })
//   }, [id])

//   return (
//     <>
//       <Header
//         typeheader="typeHeader"
//         image={restaurante?.capa}
//         nationality={restaurante?.tipo}
//         restaurantname={restaurante?.titulo}
//       />

//       <Container>
//         {restaurante &&
//           restaurante.cardapio.map((menu) => (
//             <Knowmore
//               key={menu.id}
//               id={menu.id}
//               foto={menu.foto}
//               preco={menu.preco}
//               nome={menu.nome}
//               descricao={menu.descricao}
//               porcao={menu.porcao}
//             />
//           ))}
//       </Container>
//     </>
//   )
// }

// export default Cardapio

export default function gdjbhyhg() {
  console.log('gdjbhyhg')
}

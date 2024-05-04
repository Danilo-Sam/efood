import { useEffect, useState } from 'react'

import Header from '../../../components/Header'
import RestauranteList from '../../../components/RestaurantesList'

import Footer from '../../../components/Footer'

export type Produto = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const HomePage = () => {
  const [produto, setProduto] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProduto(res))
  })
  return (
    <>
      <Header typeheader="normal" />
      <RestauranteList
        produto={produto}
        id={0}
        restaurant_name={''}
        description={''}
        score={0}
        extra_content={[]}
        image={''}
      />
      <Footer />
    </>
  )
}

export default HomePage

import Header from '../../../components/Header'
import { Carregando, HomeMain } from './styles'
import Card from '../components/Card'
import { useGetAllRestaurantsQuery } from '../../../services/api'

const HomePage = () => {
  const { data: restaurants } = useGetAllRestaurantsQuery()

  function tagArray(primary: string, secondary: boolean): string[] {
    return secondary ? ['Destaque da semana', primary] : [primary]
  }

  if (!restaurants) {
    return <Carregando>Carregando...</Carregando>
  }

  return (
    <>
      <Header />
      <HomeMain className="container">
        {restaurants.map(
          ({ id, descricao, tipo, destacado, capa, titulo, avaliacao }) => (
            <Card
              key={id}
              id={id}
              description={descricao}
              extra_content={tagArray(tipo, destacado)}
              image={capa}
              restaurant_name={titulo}
              score={avaliacao}
            />
          )
        )}
      </HomeMain>
    </>
  )
}

export default HomePage

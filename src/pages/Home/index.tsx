import Header from '../../components/Header'
import RestauranteList from '../../components/RestaurantesList'
import Produto from '../../models/Produto'

import sushi from '../../assets/images/sushi.png'

const produtos: Produto[] = [
  {
    id: 1,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  },
  {
    id: 2,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  },
  {
    id: 3,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  },
  {
    id: 4,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  },
  {
    id: 5,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  },
  {
    id: 6,
    restaurant_name: 'Hioki Sushi',
    score: '4.9',
    extra_content: ['Japonesa'],
    image: sushi,
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores'
  }
]

const HomePage = () => (
  <>
    <Header />
    <RestauranteList produto={produtos} />
  </>
)

export default HomePage

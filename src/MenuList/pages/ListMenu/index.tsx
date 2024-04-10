import Header from '../../../components/Header'
import List from '../../components/List'
import { Product } from '../../models'
import Footer from '../../../components/Footer'

import apresentacao from '../../../assets/images/apresentacao.png'
import marguerita from '../../../assets/images/pizzaMarguerita.png'

const listProduct: Product[] = [
  {
    id: 7,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 9,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 10,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 11,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 12,
    name_product: 'Pizza Marguerita',
    image_product: marguerita,
    description_product:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Cardapio = () => (
  <>
    <Header
      image={apresentacao}
      nationality={'Italiana'}
      restaurantname={'La Dolce Vitta Trattoria'}
    />
    <List product={listProduct} />
    <Footer />
  </>
)

export default Cardapio

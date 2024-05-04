import Header from '../../../components/Header'
import List from '../../components/List'
import Footer from '../../../components/Footer'

import apresentacao from '../../../assets/images/apresentacao.png'

const Cardapio = () => (
  <>
    <Header
      image={apresentacao}
      nationality={'Italiana'}
      restaurantname={'La Dolce Vitta Trattoria'}
    />
    <List produto={[]} />
    <Footer />
  </>
)

export default Cardapio

import { Route, Routes } from 'react-router-dom'
import HomePage, { Produto } from './views/Home/pages'
import Cardapio from './MenuList/pages/ListMenu'
import KnowMore from './views/ProductCart/KnowMore'
import Menu from './model/Menu/Menu'
import Knowmore from './views/ProductCart/KnowMore'

type Props = {
  produto: Produto
}

const Rotas = ({ produto }: Props) => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/Cardapio/:id"
      element={
        <Cardapio
          id={produto.cardapio.id}
          foto={produto.cardapio.foto}
          preco={produto.cardapio.preco}
          nome={produto.cardapio.nome}
          descricao={produto.cardapio.descricao}
          porcao={produto.cardapio.porcao}
          produto={{
            id: 0,
            titulo: '',
            destacado: false,
            tipo: '',
            avaliacao: 0,
            descricao: '',
            capa: '',
            cardapio: {
              id: 0,
              foto: '',
              preco: 0,
              nome: '',
              descricao: '',
              porcao: ''
            }
          }}
        />
      }
    />
    {/* <Route
      path="/Cardapio/:id"
      element={
        <KnowMore
          id={produto.cardapio.id}
          foto={produto.cardapio.foto}
          preco={produto.cardapio.preco}
          nome={produto.cardapio.nome}
          descricao={produto.cardapio.descricao}
          porcao={produto.cardapio.porcao}
        />
      }
    /> */}
  </Routes>
)

export default Rotas

import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Rotas
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
      </div>
    </BrowserRouter>
  )
}

export default App

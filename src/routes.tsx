import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import Cardapio from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas

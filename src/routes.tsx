import { Route, Routes } from 'react-router-dom'

import HomePage from './Home/pages'
import Cardapio from './MenuList/pages'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas

import { Route, Routes } from 'react-router-dom'

import HomePage from './views/Home/pages'
import Cardapio from './MenuList/pages/ListMenu'
import KnowMore from './views/ProductCart/KnowMore'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
    <Route path="/knowmore/:id" element={<KnowMore />} />
  </Routes>
)

export default Rotas

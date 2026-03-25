import { Route, Routes } from 'react-router-dom'
import HomePage from './views/Home/pages'
import KnowMorePage from './views/KnowMore/pages'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cardapio/:id" element={<KnowMorePage />} />
  </Routes>
)

export default Rotas

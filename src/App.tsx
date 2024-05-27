import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />
//   },
//   {
//     path: '/cardapio/:id',
//     element: <Cardapio />
//   }
// ])

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      {/* <RouterProvider router={routes} /> */}
    </BrowserRouter>
  )
}

export default App

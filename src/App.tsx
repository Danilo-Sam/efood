import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Card from './components/Card'
import Header from './components/Header'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Card />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { GlobalCss } from './styles'
import HomePage from './views/Home/pages'
import Cart from './components/Cart'
import Footer from './components/Footer'
import KnowMorePage from './views/KnowMore/pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/knowmore/:id',
    element: <KnowMorePage />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={routes} />
        <Footer />
        <Cart />
      </Provider>
    </>
  )
}

export default App

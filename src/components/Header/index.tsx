import { Link, useLocation, useParams } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import {
  HeaderBanner,
  HeaderContainer,
  HeaderTitle,
  LinkA,
  LinkButton
} from './styles'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { activeTheCart } from '../../store/reducers/Cart'

export type PropsHeader = {
  typeheader?: string
  nationality?: string
  image?: string
  restaurantname?: string
}
const Header = ({ nationality, image, restaurantname }: PropsHeader) => {
  const [typeHeader, setTypeHeader] = useState('normal')
  const location = useLocation()
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname == `/KnowMore/${id}`) {
      setTypeHeader('customized')
    } else if (location.pathname == '') {
      setTypeHeader('normal')
    }
  }, [id, location])
  function getActiveTheCart() {
    dispatch(activeTheCart())
  }

  return (
    <HeaderContainer typeheader={typeHeader}>
      <div className="container">
        <nav>
          <LinkButton to="/">Restaurantes</LinkButton>
          <Link to="/">
            <h1>
              <img src={logo} alt="efood" />
            </h1>
          </Link>
          <LinkA onClick={getActiveTheCart}>
            {items.length} produto(s) no carrinho
          </LinkA>
        </nav>
        <HeaderTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HeaderTitle>
      </div>
      <HeaderBanner image={image}>
        <div className="container">
          <h2>{nationality}</h2>
          <h3>{restaurantname}</h3>
        </div>
      </HeaderBanner>
    </HeaderContainer>
  )
}

export default Header

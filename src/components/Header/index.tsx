import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import {
  HeaderBanner,
  HeaderContainer,
  HeaderTitle,
  LinkA,
  LinkButton
} from './styles'

export type PropsHeader = {
  typeheader?: string
  nationality?: string
  image?: string
  restaurantname?: string
}

const Header = ({
  typeheader,
  nationality,
  image,
  restaurantname
}: PropsHeader) => (
  <HeaderContainer typeheader={typeheader}>
    <div className="container">
      <nav>
        <LinkButton to="/">Restaurantes</LinkButton>
        <Link to="/">
          <h1>
            <img src={logo} alt="efood" />
          </h1>
        </Link>
        <LinkA>0 produto(s) no carrinho</LinkA>
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

export default Header

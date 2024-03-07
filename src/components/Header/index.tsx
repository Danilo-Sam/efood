import { HeaderBar, Container, HeaderTitle } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <>
    <HeaderBar>
      <Container>
        <h1>
          <img src={logo} alt="logo eFood" />
        </h1>
      </Container>
      <HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTitle>
    </HeaderBar>
  </>
)

export default Header

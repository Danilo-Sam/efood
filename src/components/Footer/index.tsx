import { FooterContainer, LinkFooter } from './styles'

import logo from '../../assets/icons/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export default function Footer() {
  return (
    <FooterContainer>
      <a href="/">
        <img src={logo} alt="efood" />
      </a>
      <nav>
        <LinkFooter href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="instagram" />
        </LinkFooter>
        <LinkFooter href="https://web.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" />
        </LinkFooter>
        <LinkFooter href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter" />
        </LinkFooter>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>{' '}
      <br />
      <p>&copy; 2023, Todos os direitos reservados. Danilo Sampaio</p>
    </FooterContainer>
  )
}

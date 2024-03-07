import {
  CardContainer,
  CardDescricao,
  CardImage,
  CardRestaurante
} from './styles'

import sushi from '../../assets/images/sushi.png'
import star from '../../assets/images/star.png'
import macarrao from '../../assets/images/macarrao.png'
import Tag from '../Tag'
import { Button } from '../Button'

const Card = () => (
  <>
    <CardContainer>
      <CardRestaurante>
        <CardImage>
          <img src={sushi} alt="sushi" />
          <Tag padding="big">Destaque da semana</Tag>
          <Tag padding="small">Japonesa</Tag>
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="button"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
      <CardRestaurante>
        <CardImage>
          <img src={macarrao} alt="macarrão" />
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="link"
            to="/restaurante"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
      <CardRestaurante>
        <CardImage>
          <img src={macarrao} alt="macarrão" />
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="link"
            to="/restaurante"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
      <CardRestaurante>
        <CardImage>
          <img src={macarrao} alt="macarrão" />
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="link"
            to="/restaurante"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
      <CardRestaurante>
        <CardImage>
          <img src={macarrao} alt="macarrão" />
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="link"
            to="/restaurante"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
      <CardRestaurante>
        <CardImage>
          <img src={macarrao} alt="macarrão" />
        </CardImage>
        <CardDescricao>
          <div>
            <h2>Hioki Sushi</h2>
            <span>4.9</span>
            <img src={star} alt="estrela" />
          </div>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade garantida.
            <br />
            Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <Button
            type="link"
            to="/restaurante"
            title="Clique aqui para conhecer nosso cardápio"
          >
            Saiba mais
          </Button>
        </CardDescricao>
      </CardRestaurante>
    </CardContainer>
  </>
)

export default Card

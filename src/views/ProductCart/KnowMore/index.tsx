import { useState } from 'react'
import { ProductCardContainer } from './styles'
import * as styles from './styles'
import Menu from '../../../model/Menu/Menu'
import close from '../../../assets/icons/close.png'
import { getDescription } from '../../../utils/function'

export default function Knowmore(menu: Menu) {
  const [modal, setModal] = useState(false)

  function seeModal() {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <>
      <ProductCardContainer>
        <img src={menu.foto} alt={menu.nome} />
        <h2>{menu.nome}</h2>
        <p>{getDescription(menu.descricao, 192)}</p>
        <button type="button" onClick={seeModal}>
          Adicionar ao carrinho
        </button>
      </ProductCardContainer>
      {modal && (
        <styles.Modal className={modal ? '' : 'itIsNotVisible'}>
          <styles.Card className="container">
            <styles.DivImage>
              <img src={menu.foto} alt={menu.nome} />
            </styles.DivImage>
            <styles.DivContent>
              <styles.Title>{menu.nome}</styles.Title>
              <styles.Paragraph>
                {menu.descricao}
                <br />
                <br />
                <span>Serve: de {menu.porcao}</span>
              </styles.Paragraph>
              <styles.ToAdd
                // onClick={addItem}
                title="Adicionar ao carrinho"
                type="button"
              >
                Adicionar ao carrinho - R$ {menu.preco}
              </styles.ToAdd>
              <styles.Close title="fechar" type="button" onClick={seeModal}>
                <img src={close} alt="Fechar" />
              </styles.Close>
            </styles.DivContent>
          </styles.Card>
          <div className="overlay" onClick={seeModal}></div>
        </styles.Modal>
      )}
    </>
  )
}

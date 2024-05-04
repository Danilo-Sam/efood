import { useState } from 'react'

import { CardList, DescriptionList, TitleList } from './styles'
import * as styles from './styles'
// import { useDispatch } from 'react-redux'
// import { add, activeTheCart } from '../../../store/reducers/Cart'
import close from '../../../assets/icons/close.png'
import { Produto } from '../../../views/Home/pages'

type PropsList = {
  produto: Produto
}

export default function ListCard({ produto }: PropsList) {
  // const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  function seeModal() {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  seeModal()

  // const addItem = () => {
  //   dispatch(add(product))
  //   seeModal()
  //   dispatch(activeTheCart())
  // }

  return (
    <>
      <CardList>
        key={produto.id}
        id={produto.id}
        <img src={produto.cardapio.foto} alt="" />
        <TitleList>{produto.cardapio.nome}</TitleList>
        <DescriptionList>{produto.cardapio.descricao}</DescriptionList>
        <button type="button" onClick={seeModal}>
          Adicionar ao carrinho
        </button>
      </CardList>
      {modal && (
        <styles.Modal className={modal ? '' : 'itIsNotVisible'}>
          <styles.Card className="container">
            <styles.DivImage>
              <img src={produto.cardapio.foto} alt={produto.cardapio.nome} />
            </styles.DivImage>
            <styles.DivContent>
              <styles.Title>{produto.cardapio.nome}</styles.Title>
              <styles.Paragraph>
                {produto.cardapio.descricao}
                <br />
                <br />
                <span>Serve: de ${produto.cardapio.porcao}</span>
              </styles.Paragraph>
              <styles.ToAdd
                // onClick={addItem}
                title="Adicionar ao carrinho"
                type="button"
              >
                Adicionar ao carrinho - R$ {produto.cardapio.preco}
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

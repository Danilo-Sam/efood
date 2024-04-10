import { ContainerModal, CardModal } from './styles'
// import { useState } from 'react'

import pizza from '../../assets/images/pizzaMarguerita.png'
import close from '../../assets/icons/close.png'
// import { useDispatch } from 'react-redux'

// const dispatch = useDispatch
// const [modal, setModal] = useState(false)

// function seeModal() {
//   if (modal) {
//     setModal(false)
//   } else {
//     setModal(true)
//   }
// }

// const addItem = () => {
//   dispatch(add(menu))
//   seeModal()
//   dispatch(activeTheCart())
// }

export default function Modal() {
  return (
    <ContainerModal className="overlay">
      <CardModal>
        <img className="imgModal" src={pizza} alt="" />
        <div className="container">
          <h2>Pizza Marguerita</h2>
          <img title="fechar" src={close} alt="Fechar detalhes" />
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <span>serve: de 2 a 3 pessoas</span>
          <br />
          <button title="adicionar ao carrinho" className="addToCart">
            Adicionar ao carrinho - R$60,90
          </button>
        </div>
      </CardModal>
    </ContainerModal>
  )
}

import React, { useContext, useState } from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'
import { WidgetWrapper, Modal } from './styles'
import Pencil from '../components/svg/Pencil'
import Cross from '../components/svg/Cross'
import Input from '../components/Input/index'
import Button from '../components/Button/index'
import { useHistory } from "react-router-dom";

const Widget = () => {
  const {theme} = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false)
  const [sku, setSku] = useState(false)
  const [merchantName, setMerchantName] = useState(false)
  let history = useHistory();

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleRedirect = () => {
    let path = `/${sku}`
    if(merchantName) path += `/${merchantName}`
    history.push(path);
    window.location.reload()
  }


  return(
    <>
        <WidgetWrapper {...themes[theme]} visible={!openModal ? 'visible' : 'hidden'} >
            <button onClick={handleModal}>
                <Pencil color={themes[theme].primaryText} />
            </button>
        </WidgetWrapper>
        <Modal {...themes[theme]} visible={openModal ? 'visible' : 'hidden'}>
            <button onClick={handleModal}>
                <Cross color={themes[theme].primaryText} />
            </button>
            <Input labelText={'Type Sku'} onChange={e => setSku(e.target.value)}></Input>
            <Input labelText={'Type Merchant Name'} onChange={e => setMerchantName(e.target.value)}></Input>
            <Button onClick={handleRedirect}>Search</Button>
        </Modal>
    </>
  )
}

export default Widget
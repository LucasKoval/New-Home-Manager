import React, { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { IoHomeOutline, IoDocumentsOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsBricks } from 'react-icons/bs'
import { GlobalContext } from '@/context/GlobalContext'
import { HeaderSection, Title, UserSection, ImageContainer } from './Header.styles.jsx'

const Header = () => {
  const router = useRouter()
  const { handleOpenModal, isAuth, setIsAuth } = useContext(GlobalContext)

  const goHome = () => {
    router.push('/')
  }

  const goToPage = (id) => {
    router.push(`/page${id}`)
  }

  const lockPageHandler = () => {
    setIsAuth(false)
    toast.error('Contenido bloqueado')
  }

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="burger">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <a onClick={() => goHome()}>
            <IoHomeOutline />
            <li>Home</li>
          </a>
          <a onClick={() => goToPage('1')}>
            <MdOutlineDesignServices />
            <li>Proyecto</li>
          </a>
          <a onClick={() => goToPage('2')}>
            <BsBricks />
            <li>Materiales</li>
          </a>
          <a onClick={() => goToPage('3')}>
            <IoDocumentsOutline />
            <li>Documentos</li>
          </a>
        </ul>
      </ImageContainer>

      <Title onClick={() => goHome()}>Proyecto - Casa Nueva</Title>

      <UserSection>
        {!isAuth ? (
          <ImageContainer className="themeToogle" onClick={handleOpenModal}>
            <Image
              src="/icon/lock.png"
              alt="UserIcon"
              width="45"
              height="45"
              className="themeToogle"
            />
          </ImageContainer>
        ) : (
          <ImageContainer className="themeToogle" onClick={lockPageHandler}>
            <Image
              src="/icon/unlock.png"
              alt="UserIcon"
              width="45"
              height="45"
              className="themeToogle"
            />
          </ImageContainer>
        )}
      </UserSection>
    </HeaderSection>
  )
}

export default Header

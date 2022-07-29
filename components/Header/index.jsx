import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import { toast } from 'react-toastify'
import { IoHomeOutline, IoDocumentsOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsBricks } from 'react-icons/bs'
import { GlobalContext } from '@/context/GlobalContext'
import { HeaderSection, Title, ImageContainer } from './Header.styles.jsx'

const Header = () => {
  const router = useRouter()
  const { themeStyle, setThemeStyle } = useContext(GlobalContext)
  const [selected, setSelected] = useState(false)

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

  const goHome = () => {
    router.push('/')
    /* toast.success('Welcome Home!') */
  }

  const goToPage = (id) => {
    router.push(`/page${id}`)
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

      <ImageContainer className="themeToogle" onClick={() => themeToggler()}>
        <Image
          src="/icon/themeToogle.png"
          alt="SearchIcon"
          width="45"
          height="45"
          className="themeToogle"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header

import React, { useState, createContext } from 'react'
import Header from '@/components/Header'
import AuthModal from '@/components/AuthModal'
import Footer from '@/components/Footer'
import { BodyContainer } from '@/styles/globalStyles'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children, themeStyle, setThemeStyle }) => {
  const [loading, setLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const values = {
    themeStyle,
    setThemeStyle,
    loading,
    setLoading,
    isAuth,
    setIsAuth,
    openModal,
    handleOpenModal,
    handleCloseModal,
  }

  return (
    <GlobalContext.Provider value={values}>
      <BodyContainer className="BodyContainer">
        <AuthModal openModal={openModal} handleCloseModal={handleCloseModal} />
        <Header />
        {children}
        <Footer />
      </BodyContainer>
    </GlobalContext.Provider>
  )
}

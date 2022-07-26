import React, { useState, createContext } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BodyContainer } from '@/styles/globalStyles'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children, themeStyle, setThemeStyle }) => {
  const [loading, setLoading] = useState(false)

  const values = { themeStyle, setThemeStyle, loading, setLoading }

  return (
    <GlobalContext.Provider value={values}>
      <BodyContainer className="BodyContainer">
        <Header />
        {children}
        <Footer />
      </BodyContainer>
    </GlobalContext.Provider>
  )
}

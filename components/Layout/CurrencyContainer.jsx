import React from 'react'
import { Container } from './Layout.styles.jsx'

const CurrencyContainer = ({ children }) => {
  return <Container className="currencyContainer">{children}</Container>
}

export default CurrencyContainer

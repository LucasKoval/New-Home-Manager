import React from 'react'
import { Container } from './Layout.styles.jsx'

const TitleContainer = ({ children }) => {
  return <Container className="titleContainer">{children}</Container>
}

export default TitleContainer

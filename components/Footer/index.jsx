import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FooterSection, Container, SubContainer, Title, Credits } from './Footer.styles.jsx'

const Footer = () => {
  return (
    <FooterSection className="FooterSection">
      <Container className="footerContainer">
        <SubContainer className="project">
          <Title>New Home Manager 2022</Title>
        </SubContainer>

        <SubContainer className="developer">
          <Credits>Lucas Koval | Full Stack Developer</Credits>
        </SubContainer>

        <SubContainer className="contact">
          <Link href="https://lucaskovaldev.com/">
            <a target="_blank" rel="noreferrer" title="Portfolio">
              <Image src="/icon/portfolio.svg" alt="Portfolio" width="40px" height="40" />
            </a>
          </Link>

          <Link href="mailto:lucaskovaldev@gmail.com">
            <a target="_blank" rel="noreferrer" title="Email" style={{ margin: '0 0.5rem 0 1rem' }}>
              <Image src="/icon/email.png" alt="Email" width="37px" height="36px" />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/lucaskoval/">
            <a
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              style={{ margin: '0 1rem 0 0.5rem' }}
            >
              <Image src="/icon/linkedin.svg" alt="LinkedIn" width="35px" height="35" />
            </a>
          </Link>

          <Link href="https://github.com/LucasKoval">
            <a target="_blank" rel="noreferrer" title="GitHub">
              <Image
                src="/icon/github.png"
                alt="GitHub"
                width="36px"
                height="36px"
                className="bg-white rounded-3"
              />
            </a>
          </Link>
        </SubContainer>
      </Container>
    </FooterSection>
  )
}

export default Footer

import styled from 'styled-components'

export const FooterSection = styled.footer`
  width: 100%;
  height: 100px;
  bottom: 0;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor.footer};
  background-color: ${(props) => props.theme.bgColor.footer};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: 9.5rem;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-flow: column;
    height: 9.5rem;
  }
`

export const SubContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a:hover {
    transform: translateY(-5px) scale(1.2);
    transition: all 0.4s ease;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin: 0.4rem 0;
    &.developer {
      margin-bottom: 0.6rem;
    }
  }
`

export const Title = styled.h4`
  margin: 0;
`

export const Credits = styled.p`
  font-size: 17px;
  margin: 0;
  color: ${(props) => props.theme.fontColor.author};
`

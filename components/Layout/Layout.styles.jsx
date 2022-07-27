import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  margin-top: 1rem;

  div.MuiPaper-root {
    margin: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
  }
`

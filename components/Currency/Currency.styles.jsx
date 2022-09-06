import styled from 'styled-components'

export const Item = styled.div`
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

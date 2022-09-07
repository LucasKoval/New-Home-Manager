import styled from 'styled-components'

export const Item = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0.5rem;
    border: 1px solid gold;
    border-radius: 50%;
  }

  &.date {
    height: 1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-flow: column;
    height: 9.5rem;
  }
`

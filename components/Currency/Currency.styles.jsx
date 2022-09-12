import styled from 'styled-components'

export const Item = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0.5rem;
    

    &.average {
      border: 1px solid gold;
    border-radius: 50%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      
      padding: 0;
      margin-top: 0.5rem;
      

      &.average {
        padding: 0 0.3rem;
        margin-top: 7px;
        color: gold;
        border 1px solid gold;
        border-radius: 0;
      }
    }
  }

  &.date {
    height: 1rem;
    margin-top: 0;

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-top: 0.8rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-flow: column;

    div.currencyIcon {
      padding: 2.5rem 0;
      margin: 2rem 0;
    }
  }
`

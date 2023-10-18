import styled from 'styled-components'

export const Item = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.lastItem {
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-bottom: 1rem;
      width: max-content;
    }
  }
  span {
    padding: 0.5rem;
    
    &.average {
      border: 1px solid ${(props) => props.theme.fontColor.author};
      border-radius: 50%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      padding: 0;
      margin-top: 0.5rem;
      
      &.average {
        padding: 0 0.3rem;
        margin-top: 7px;
        color: gold;
        border 1px solid ${(props) => props.theme.fontColor.author};
        border-radius: 0;
      }
    }

    &.finalValues {
      font-weight: bold;
    }

    &.red {
      color: #A1000E;
    }

    &.yellow {
      color: #F6BE00;
    }

    &.green {
      color: #009A17;
    }

    &.finalSalary {
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme.fontColor.author};
      border: 1px solid;
      margin-left: 8px;
      padding: 0.25rem;
    }
  }

  div.finalFamilySalary {
    font-size: 18px;
    font-weight: bold;
    color: #009A17;
    border: 1px solid;
    padding: 0.25rem;
    margin-top: 8px;
  }

  &.date {
    height: 1rem;

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  &.bna {
    height: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    span.bna {
      display: contents;
      font-weight: bold;
    }

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-top: 1.7rem;
      margin-bottom: 3rem;
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

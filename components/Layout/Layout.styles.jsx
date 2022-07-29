import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1580px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  margin-top: 1rem;

  &.titleContainer {
    max-width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0;
  }

  div.MuiPaper-root {
    margin: 1rem;
  }

  div.MuiBox-root {
    margin-top: 2rem;

    div {
      margin-left: 0;
      margin-right: 0;
    }

    div button {
      color: ${(props) => props.theme.bgColor.header};
      background-color: ${(props) => props.theme.bgColor.button};

      &:hover {
        background-color: ${(props) => props.theme.bgColor.hover};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin-top: 0;

    &.titleContainer {
      justify-content: center;
    }

    div.MuiBox-root {
      margin-top: 1rem;
    }
  }
`

export const AccordionItemContainer = styled.div`
  div {
    padding: 1rem;

    p {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
  }
`

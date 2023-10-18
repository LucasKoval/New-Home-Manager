import styled from 'styled-components'

/* 
MeLi Box Shadows
box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%);

MeLi Bg Color
#ededed
 */

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

  &.currencyContainer {
    margin-top: 0;
  }

  &.subtitleContainer {
    margin-top: 0;
  }

  div.MuiPaper-root {
    margin: 1rem;
  }

  div.MuiBox-root {
    margin-top: 1rem;

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

  #currencySection {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  &:nth-child(3) {
    margin: -1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin-top: 0;

    &.titleContainer {
      justify-content: center;
    }

    div.MuiBox-root {
      margin-top: 1rem;
    }

    #currencySection {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    #currencySection > div > hr {
      height: 8.2rem;
    }

    &:nth-child(3) {
      margin: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    #salarySection {
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

export const CustomTabs = styled.div`
  div
    > div
    > div.MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX.css-69z67c-MuiTabs-scroller {
    border-radius: 4px;
  }
`

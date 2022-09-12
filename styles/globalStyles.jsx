import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const lightTheme = {
  bgColor: {
    main: 'linear-gradient(-225deg, #8e9eab, #f2f2f2, #dbdbdb, #eaeaea);',
    header: '#eaeaea',
    sidebar: '#eaeaea',
    footer: '#eaeaea',
    button: '#0F2027',
    toast: '#203A43',
    hover: '#2C5364',
  },
  fontColor: {
    main: '#203A43',
    header: '#0F3942',
    sidebar: '#0F3942',
    footer: '#0F3942',
    menu: '#00a9cd',
    author: '#00a9cd',
    toast: '#D8D9D3',
  },
  color: {
    darkGrey: '#333333',
    grey: '#D8D9D3',
    lightGrey: '#E8ECEE',
    darkBlue: '#161B22',
    greyBlue: '#506276',
    blue: '#0083b0',
    lightBlue: '#00b4db',
    aqua: '#24CDCA',
    yellow: '#FFC677',
    coral: '#FF6962',
  },
  device: {
    tablet: '768px',
    mobile: '425px',
  },
}

export const darkTheme = {
  bgColor: {
    main: 'linear-gradient(-225deg, #2C5364, #203A43, #0F2027)',
    header: '#0F2027',
    sidebar: '#0F2027',
    footer: '#0F2027',
    button: '#f2f2f2',
    toast: '#E8ECEE',
    hover: '#8e9eab',
  },
  fontColor: {
    main: '#E8ECEE',
    header: '#E8ECEE',
    sidebar: '#E8ECEE',
    footer: '#E8ECEE',
    menu: '#FFC677',
    author: '#FFC677',
    toast: '#203A43',
  },
  color: {
    darkGrey: '#333333',
    grey: '#D8D9D3',
    lightGrey: '#E8ECEE',
    darkBlue: '#161B22',
    greyBlue: '#506276',
    blue: '#0083b0',
    lightBlue: '#00b4db',
    aqua: '#24CDCA',
    yellow: '#FFC677',
    coral: '#FF6962',
  },
  device: {
    tablet: '768px',
    mobile: '425px',
  },
}

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body {
  background-color: ${(props) => props.theme.body};
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
h1, h2, h3, h4, p, span, strong, input, textarea, SelectSelect, option, button, div, a {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
`

export const ToastStyledContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    color: ${(props) => props.theme.fontColor.toast};
    background-color: ${(props) => props.theme.bgColor.toast};
    font-size: 1rem;
    height: 4rem;
    -webkit-box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
  .Toastify__close-button > svg {
    color: ${(props) => props.theme.fontColor.toast};
  }
  .Toastify__toast--info {
    /* background-image: url(/img/toast-bg-desktop.jpg);
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #3598db;
    border-bottom: 1px solid #3598db; */
    .Toastify__progress-bar {
      height: 4px;
      background: #3598db;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--success {
    /* background-image: url(/img/toast-bg-desktop.jpg);
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 2px solid #08bc0d;
    border-bottom: 1px solid #08bc0d; */
    .Toastify__progress-bar {
      height: 4px;
      background: #08bc0d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--error {
    /* background-image: url(/img/toast-bg-desktop.jpg);
    color: ${({ theme }) => theme.color.darkGrey}; 
    border-top: 1px solid #e74d3d;
    border-bottom: 1px solid #e74d3d; */
    .Toastify__progress-bar {
      height: 4px;
      background: #e74d3d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
`

export const BodyContainer = styled.div`
  min-height: 100vh;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontColor.main};
  background-image: ${(props) => props.theme.bgColor.main};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    min-height: 100vh;
  }
`

export const MainSection = styled.main`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  padding-top: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0 1rem;
    padding-top: 4.5rem;
  }
`

export const PageContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;

  &.homepage {
    flex-direction: column;
  }

  div.materialsTable {
    margin-top: -1rem;
  }

  div.accordion-container {
    min-width: 45rem;
    div.MuiPaper-root {
      background-color: #e8ecee;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    /* width: 90%; */
    flex-flow: column;
    justify-content: center;
    padding: 0 0 2rem 0;

    div.materialsTable {
      margin-top: 1.5rem;
    }

    div.accordion-container {
      min-width: 100%;
    }
  }
`

export const Title = styled.h1`
  &.notFound {
    text-align: center;
    margin: 1rem 0;
  }
`

export const Subtitle = styled.h2`
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: -2rem;

  span {
    color: ${({ theme }) => theme.fontColor.author};
  }

  &.list {
    margin-bottom: 0;
  }

  &.currency {
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-top: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  &.pages {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  &.project {
    margin-bottom: -1rem;

    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }
`

export const Paragraph = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.color.darkBlue};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  padding: 0 6px 0 13px;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.color.darkGrey};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    border: 1px solid #24cdc9;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

export const Textarea = styled.textarea`
  width: 95%;
  height: auto;
  max-height: 150px;
  background: transparent;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.color.darkGrey};
  padding: 10px 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    outline: none;
    border: 1px solid #24cdc9;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

export const Button = styled.button`
  height: 48px;
  width: 198px;
  border-radius: 32px;
  color: #ffffff;
  background: #ff6962;
  border: none;
  align-self: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    border: 1px solid rgba(255, 105, 98, 1);
    color: #ff6962;
    background: rgba(255, 105, 98, 0.15);
    transition: all 0.5s ease;
  }
  &:focus,
  &:focus-visible {
    outline: none;
    background: #ff6962;
    border: none;
  }
  &:disabled {
    outline: none;
    border: 1px solid #a6a6a6;
    background: #f3f5f6;
    color: #a6a6a6;
    cursor: default;
  }
  &.white {
    color: #4f6276;
    border: 2px solid #4f6276;
    background: #ffffff;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100%;
  }
`

export const ErrorPageContainer = styled.div`
  padding: 7rem 0 2rem 0;
  img {
    border-radius: 75px;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0;
    img {
      width: '300px';
      height: '169px';
    }
  }
`

export const ErrorMessage = styled.span`
  display: flex;
  justify-content: left;
  font-size: 14px;
  color: rgba(245, 16, 0, 0.8);
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

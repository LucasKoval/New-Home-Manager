import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import * as dayjs from 'dayjs'
import 'dayjs/locale/es'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CurrencyContainer from '@/components/Layout/CurrencyContainer'
import { GlobalContext } from '@/context/GlobalContext'
import { get } from 'lodash'
import { ImageContainer } from '@/components/Header/Header.styles.jsx'
import { Item } from './Currency.styles.jsx'

dayjs.locale('es')

const Currency = () => {
  const { isAuth } = useContext(GlobalContext)
  const [oficialData, setOficialData] = useState(false)
  const [blueData, setBlueData] = useState(false)
  const [cclData, setCclData] = useState(false)
  const [mepData, setMepData] = useState(false)
  const [tarjetaData, setTarjetaData] = useState(false)
  const [ppiData, setPpiData] = useState(false)
  const [salaryDolar, setSalaryDolar] = useState(false)
  const [salaryPeso, setSalaryPeso] = useState(false)
  const [salaryStatus, setSalaryStatus] = useState(false)
  const [lossStatus, setLossStatus] = useState(false)
  const [lossPercentage, setLossPercentage] = useState(0)
  const plusForRent = 35000
  const plusForBonus = 0
  const plusExtraYani = 50000
  const currentSalary = 417012
  const yaniSalary = 374000 + plusExtraYani
  const badSalary = 900000
  const mediumSalary = 1000000
  const badPercentage = 40
  const mediumPercentage = 20
  const valtechLastBNAValue = 267
  const valtechLastBNAMonth = '20/7'
  const updateSalaryMonth = 'Octubre'

  useEffect(() => {
    const fetchData = async () => {
      const currencyResponse = await fetch('https://dolarapi.com/v1/dolares/')
      const currencyResponseData = await currencyResponse.json()
      console.log('currencyResponseData:', currencyResponseData)

      const oficialElement = currencyResponseData.find((data) => data.casa === 'oficial')
      const blueElement = currencyResponseData.find((data) => data.casa === 'blue')
      const cclElement = currencyResponseData.find((data) => data.casa === 'contadoconliqui')
      const mepElement = currencyResponseData.find((data) => data.casa === 'bolsa')
      const oficial = parseInt(oficialElement.compra) - 0.5 // Eliminar "-0.5" en Octubre
      const ccl_ppi = parseInt(cclElement.venta) + 20
      //const ccl_ppi = (parseInt(cclElement.compra) + parseInt(cclElement.venta)) / 2
      const lossPercentage = (oficial * 100) / valtechLastBNAValue - 100

      setOficialData(oficialElement)
      setBlueData(blueElement)
      setCclData(cclElement)
      setMepData(mepElement)
      setTarjetaData((parseInt(get(oficialElement, 'venta', 0)) - 2.5) * 2)
      setPpiData(ccl_ppi)
      setLossPercentage(lossPercentage)

      setSalaryDolar((currentSalary + plusForBonus) / oficial)
      setSalaryPeso(parseInt((currentSalary + plusForBonus) / oficial) * ccl_ppi + plusForRent)

      if (parseInt((currentSalary + plusForBonus) / oficial) * ccl_ppi <= badSalary) {
        setSalaryStatus('red')
      } else if (parseInt((currentSalary + plusForBonus) / oficial) * ccl_ppi <= mediumSalary) {
        setSalaryStatus('yellow')
      } else {
        setSalaryStatus('green')
      }

      if (lossPercentage <= mediumPercentage) {
        setLossStatus('green')
      } else if (lossPercentage <= badPercentage) {
        setLossStatus('yellow')
      } else {
        setLossStatus('red')
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <CurrencyContainer>
        <div id="currencySection">
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              COMPRA:&nbsp;
              <span className="average">{parseInt(get(oficialData, 'compra', 0)) - 0.5}</span>
              {/* Eliminar "-1.5" en Octubre */}
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA:&nbsp;<span>{parseInt(get(oficialData, 'venta', 0)) - 2.5}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              TARJETA:&nbsp;
              <span>{tarjetaData}</span>
            </Item>
          </Stack>
        </div>
      </CurrencyContainer>

      <CurrencyContainer>
        <div id="currencySection">
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar-blue.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              COMPRA:&nbsp;<span>{parseInt(get(blueData, 'compra', 0))}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar-blue.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA:&nbsp;<span>{parseInt(get(blueData, 'venta', 0))}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar-blue.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              PROMEDIO:&nbsp;
              <span className="average">{parseInt((blueData.compra + blueData.venta) / 2)}</span>
            </Item>
          </Stack>
        </div>
      </CurrencyContainer>

      <CurrencyContainer>
        <div id="currencySection">
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={3}>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/ccl.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              COMPRA:&nbsp;
              <span>{parseInt(get(cclData, 'compra', 0))}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/ccl.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA:&nbsp;<span>{parseInt(get(cclData, 'venta', 0))}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/ccl.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              LETRAS PPI:&nbsp;
              <span className="average">{ppiData}</span>
            </Item>
          </Stack>
        </div>
      </CurrencyContainer>

      {isAuth && (
        <CurrencyContainer>
          <div id="salarySection">
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={3}
            >
              <Item className="lastItem">
                Salario + Alquiler:
                <span className="finalValues">
                  U$S {parseInt(salaryDolar).toLocaleString('es')} |{' '}
                  <span className={salaryStatus}>
                    {(salaryPeso - plusForRent).toLocaleString('es')}
                  </span>{' '}
                  + {plusForRent.toLocaleString('es')} =
                  <span className="finalSalary">$ {salaryPeso.toLocaleString('es')}</span>
                </span>
              </Item>
            </Stack>

            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem style={{ height: '5rem' }} />}
              spacing={3}
              style={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
              }}
            >
              <Item className="lastItem">
                Salario Yani:
                <span className="finalSalary">$ {yaniSalary.toLocaleString('es')}</span>
              </Item>
              <Item className="lastItem">
                <span>
                  Ingreso Familiar:
                  <div className="finalFamilySalary">
                    $ {(salaryPeso + yaniSalary).toLocaleString('es')}
                  </div>
                </span>
              </Item>
            </Stack>
          </div>
        </CurrencyContainer>
      )}

      <Item className="date">
        Actualización:&nbsp;
        {dayjs(get(blueData, 'fechaActualizacion', 0)).format('D MMMM YYYY - h:MM:ss A')}
      </Item>

      <Item className="bna">
        Último valor tomado BNA (UVT):&nbsp;
        <span className="bna">{valtechLastBNAValue}</span> ({valtechLastBNAMonth})
        <br />
        Próxima actualización BNA:&nbsp;
        <span className="bna">{updateSalaryMonth}</span> (23/10)
        <br />
        Diferencia BNA actual con UVT:&nbsp;
        <span className={`bna ${lossStatus}`}>{lossPercentage.toLocaleString('es')}%</span>
      </Item>
    </>
  )
}

export default Currency

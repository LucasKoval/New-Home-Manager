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
  const [salaryDolar, setSalaryDolar] = useState(false)
  const [salaryPeso, setSalaryPeso] = useState(false)
  const [salaryStatus, setSalaryStatus] = useState(false)
  const actualSalary = 320409
  const yaniSalary = 326000
  const plusForRent = 35000
  const plusForBonus = 30000
  const badSalary = 600000
  const mediumSalary = 665000

  useEffect(() => {
    const fetchData = async () => {
      const currencyResponse = await fetch('https://dolarapi.com/v1/dolares/')
      const currencyResponseData = await currencyResponse.json()

      const oficialElement = currencyResponseData.find((data) => data.casa === 'oficial')
      const blueElement = currencyResponseData.find((data) => data.casa === 'blue')
      const cclElement = currencyResponseData.find((data) => data.casa === 'contadoconliqui')
      const mepElement = currencyResponseData.find((data) => data.casa === 'bolsa')
      const oficial = parseInt(oficialElement.compra) - 1.5 // Eliminar "-1.5" en Octubre
      const ccl = (parseInt(cclElement.compra) + parseInt(cclElement.venta)) / 2

      setOficialData(oficialElement)
      setBlueData(blueElement)
      setCclData(cclElement)
      setMepData(mepElement)

      setSalaryDolar((actualSalary + plusForBonus) / oficial)
      setSalaryPeso(parseInt((actualSalary + plusForBonus) / oficial) * ccl + plusForRent)

      if (parseInt((actualSalary + plusForBonus) / oficial) * ccl <= badSalary) {
        setSalaryStatus('red')
      } else if (parseInt((actualSalary + plusForBonus) / oficial) * ccl <= mediumSalary) {
        setSalaryStatus('yellow')
      } else {
        setSalaryStatus('green')
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
              <span className="average">{parseInt(get(oficialData, 'compra', 0)) - 1.5}</span>
              {/* Eliminar "-1.5" en Octubre */}
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA:&nbsp;<span>{parseInt(get(oficialData, 'venta', 0))}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon isMobile">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              PROMEDIO:&nbsp;
              <span>{parseInt((oficialData.compra + oficialData.venta) / 2)}</span>
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
              PROM. PPI:&nbsp;
              <span className="average">
                {(parseInt(get(cclData, 'compra', 0)) + parseInt(get(cclData, 'venta', 0))) / 2}
              </span>
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
                Salario + Bono + Alquiler:
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
                <span className="finalValues">$ {yaniSalary.toLocaleString('es')}</span>
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
    </>
  )
}

export default Currency

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import * as dayjs from 'dayjs'
import 'dayjs/locale/es'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CurrencyContainer from '@/components/Layout/CurrencyContainer'
import { get } from 'lodash'
import { ImageContainer } from '@/components/Header/Header.styles.jsx'
import { Item } from './Currency.styles.jsx'

dayjs.locale('es')

const Currency = () => {
  const [currencyData, setCurrencyData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.bluelytics.com.ar/v2/latest')
      const data = await response.json()
      setCurrencyData(data)
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
              COMPRA:&nbsp;<span>{get(currencyData, 'blue.value_buy', 0)}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA:&nbsp;<span>{get(currencyData, 'blue.value_sell', 0)}</span>
            </Item>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              PROMEDIO:&nbsp;
              <span className="average">{get(currencyData, 'blue.value_avg', 0)}</span>
            </Item>
          </Stack>
        </div>
      </CurrencyContainer>
      <Item className="date">
        Actualización:&nbsp;
        {dayjs(get(currencyData, 'last_update', 0)).format('D MMMM YYYY - h:MM:ss A')}
      </Item>
    </>
  )
}

export default Currency

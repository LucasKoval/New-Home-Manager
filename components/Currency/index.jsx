import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CardContainer from '@/components/Layout/CardContainer'
import { api } from '../../config/apiConfig'
import axios from 'axios'
import { get } from 'lodash'
import { ImageContainer } from '@/components/Header/Header.styles.jsx'
import { Item } from './Currency.styles.jsx'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils/index.js'

const Currency = () => {
  const [currencyData, setCurrencyData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.bluelytics.com.ar/v2/latest')
      const data = await response.json()
      console.log('Client Data: ', data)
      setCurrencyData(data)
    }
    fetchData()
  }, [])

  return (
    <CardContainer>
      <div>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <Item>
            <ImageContainer className="currencyIcon">
              <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
            </ImageContainer>
            COMPRA: {get(imagen, 'formats.medium.url', 0) currencyData.blue.value_buy ? currencyData.blue.value_buy : 0}
          </Item>
          <Item>
            <ImageContainer className="currencyIcon">
              <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
            </ImageContainer>
            VENTA: {currencyData.blue.value_sell ? currencyData.blue.value_sell : 0}
          </Item>
          <Item>
            <ImageContainer className="currencyIcon">
              <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
            </ImageContainer>
            PROMEDIO: {currencyData.blue.value_avg ? currencyData.blue.value_avg : 0}
          </Item>
        </Stack>
      </div>
    </CardContainer>
  )
}

export default Currency

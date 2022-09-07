import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import * as dayjs from 'dayjs'
import 'dayjs/locale/es'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CardContainer from '@/components/Layout/CardContainer'
import { api } from '../../config/apiConfig'
import axios from 'axios'
import { get } from 'lodash'
import { ImageContainer } from '@/components/Header/Header.styles.jsx'
import { Item } from './Currency.styles.jsx'

dayjs.locale('es')

const Currency = () => {
  const [currencyData, setCurrencyData] = useState(false)
  const [updateDate, setUpdateDate] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.bluelytics.com.ar/v2/latest')
      const data = await response.json()
      setCurrencyData(data)
      setUpdateDate(data.last_update)
    }
    fetchData()
  }, [])

  return (
    <>
      <CardContainer>
        <div>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              COMPRA: {get(currencyData, 'blue.value_buy', 0)}
            </Item>
            <Item>
              <ImageContainer className="currencyIcon">
                <Image src="/icon/dollar.png" alt="SearchIcon" width="45" height="45" />
              </ImageContainer>
              VENTA: {get(currencyData, 'blue.value_sell', 0)}
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
      </CardContainer>
      <Item className="date">
        Actualización: {dayjs(currencyData.last_update).format('D MMMM YYYY - h:MM:ss A')}
      </Item>
    </>
  )
}

export default Currency

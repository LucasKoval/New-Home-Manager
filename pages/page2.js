import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TitleContainer from '@/components/Layout/TitleContainer'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import MaterialsList from '@/components/MaterialsList'

export default function Page2() {
  const [listName, setListName] = useState('cerramientos')
  const [listLabel, setListLabel] = useState('Estructura y Cerramientos')

  const selectListHandler = (stage, label) => {
    setListName(stage)
    setListLabel(label)
  }

  return (
    <MainSection className="MainSection">
      <TitleContainer>
        <Subtitle className="list">
          Listado de Materiales - <span>{listLabel}</span>
        </Subtitle>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup aria-label="large contained button group" variant="contained" size="large">
            <Button onClick={() => selectListHandler('cerramientos', 'Estructura y Cerramientos')}>
              Estruct. y Cerram.
            </Button>
            <Button onClick={() => selectListHandler('piso', 'Piso y Revestimientos')}>
              Piso y Rev.
            </Button>
            <Button onClick={() => selectListHandler('techo', 'Techo')}>Techo</Button>
          </ButtonGroup>
        </Box>
      </TitleContainer>
      <PageContainer className="PageContainer">
        <MaterialsList list={listName} />
      </PageContainer>
    </MainSection>
  )
}

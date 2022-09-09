import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TitleContainer from '@/components/Layout/TitleContainer'
import MaterialsList from '@/components/MaterialsList'
import { GlobalContext } from '@/context/GlobalContext'
import { CustomTabs } from '@/components/Layout/Layout.styles'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

export default function Page2() {
  const { isAuth } = useContext(GlobalContext)
  const [listName, setListName] = useState('cerramientos')
  const [listLabel, setListLabel] = useState('Estructura y Cerramientos')

  const selectListHandler = (stage, label) => {
    setListName(stage)
    setListLabel(label)
  }

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <MainSection className="MainSection">
      {!isAuth ? (
        <PageContainer className="PageContainer">
          Toque el candado para ver el contenido.
        </PageContainer>
      ) : (
        <>
          <TitleContainer>
            <Subtitle className="list">
              Listado de Materiales - <span>{listLabel}</span>
            </Subtitle>

            <CustomTabs id="custom-tabs">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab
                    label="Estruct. y Cerram."
                    onClick={() => selectListHandler('cerramientos', 'Estructura y Cerramientos')}
                  />
                  <Tab
                    label="Piso y Rev."
                    onClick={() => selectListHandler('piso', 'Piso y Revestimientos')}
                  />
                  <Tab label="Techo" onClick={() => selectListHandler('techo', 'Techo')} />
                  <Tab label="Plomeria" />
                </Tabs>
              </Box>
            </CustomTabs>
          </TitleContainer>
          <PageContainer className="PageContainer">
            <MaterialsList list={listName} />
          </PageContainer>
        </>
      )}
    </MainSection>
  )
}

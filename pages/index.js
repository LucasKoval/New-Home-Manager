import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import CardContainer from '../components/Layout/CardContainer'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

export default function Home() {
  return (
    <MainSection className="MainSection">
      <Subtitle>Casa Nueva</Subtitle>
      <PageContainer className="PageContainer">
        <CardContainer>
          <Card sx={{ maxWidth: 345 }}>
            <Link href="/page1">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/arqui.png" alt="logo" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Proyecto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Documentos del proyecto.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
            </Link>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <Link href="/page2">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/arqui.png" alt="logo" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Materiales
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Listado de materiales.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
            </Link>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <Link href="/page3">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/arqui.png" alt="logo" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Documentos
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Facturas y remitos.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
            </Link>
          </Card>
        </CardContainer>
      </PageContainer>
    </MainSection>
  )
}

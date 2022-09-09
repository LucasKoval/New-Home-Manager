import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import CardContainer from '@/components/Layout/CardContainer'
import Currency from '@/components/Currency'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

export default function Home() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer homepage">
        <Subtitle className="currency">Dolar Blue</Subtitle>
        <Currency />
        <Subtitle className="pages">Paginas</Subtitle>
        <CardContainer>
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%)',
            }}
          >
            <Link href="/page1">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/project.png" alt="logo" />
                  <CardContent style={{ backgroundColor: '#E8ECEE' }}>
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

          <Card
            sx={{
              maxWidth: 345,
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%)',
            }}
          >
            <Link href="/page2">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/materials.png" alt="logo" />
                  <CardContent style={{ backgroundColor: '#E8ECEE' }}>
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

          <Card
            sx={{
              maxWidth: 345,
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%)',
            }}
          >
            <Link href="/page3">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/docs.png" alt="logo" />
                  <CardContent style={{ backgroundColor: '#E8ECEE' }}>
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

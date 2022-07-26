import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import CurrencyContainer from '@/components/Layout/CurrencyContainer'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import projects from '@/db/project.json'

export default function Page1() {
  return (
    <MainSection className="MainSection">
      <Subtitle className="project">Proyecto - Arquitecta</Subtitle>
      <PageContainer className="PageContainer">
        <CurrencyContainer>
          {projects.map((project) => (
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%)',
              }}
              key={project.id}
              id="CARD"
            >
              <Link href={project.link}>
                <a target="_blank" rel="noreferrer" title="Abrir documento" className="me-4">
                  <CardActionArea>
                    <CardMedia component="img" height="140" image="/img/arqui.png" alt="logo" />
                    <CardContent style={{ backgroundColor: '#E8ECEE' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
              </Link>
            </Card>
          ))}
        </CurrencyContainer>
      </PageContainer>
    </MainSection>
  )
}

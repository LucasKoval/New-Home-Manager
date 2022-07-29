import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import CardContainer from '@/components/Layout/CardContainer'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import projects from '@/db/project.json'

export default function Page1() {
  return (
    <MainSection className="MainSection">
      <Subtitle>Proyecto - Arquitecta</Subtitle>
      <PageContainer className="PageContainer">
        <CardContainer>
          {projects.map((project) => (
            <Card sx={{ maxWidth: 345 }} key={project.id}>
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
        </CardContainer>
      </PageContainer>
    </MainSection>
  )
}

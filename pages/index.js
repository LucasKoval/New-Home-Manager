import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import { Button, CardActionArea } from '@mui/material'
import CardContainer from '../components/Layout/CardContainer'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1)
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1)
}

export default function Home() {
  const [checked, setChecked] = React.useState([])
  const [left, setLeft] = React.useState([0, 1, 2, 3])
  const [right, setRight] = React.useState([4, 5, 6, 7])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleAllRight = () => {
    setRight(right.concat(left))
    setLeft([])
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }

  const handleAllLeft = () => {
    setLeft(left.concat(right))
    setRight([])
  }

  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )

  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <CardContainer>
          <Card sx={{ maxWidth: 345 }}>
            <Link href="/page1">
              <a rel="noreferrer" title="Abrir documento" className="me-4">
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/img/project.png" alt="logo" />
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
                  <CardMedia component="img" height="140" image="/img/materials.png" alt="logo" />
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
                  <CardMedia component="img" height="140" image="/img/docs.png" alt="logo" />
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

        <CardContainer>
          <Subtitle className="list">Tareas pendientes</Subtitle>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList(left)}</Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllRight}
                  disabled={left.length === 0}
                  aria-label="move all right"
                >
                  ≫
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllLeft}
                  disabled={right.length === 0}
                  aria-label="move all left"
                >
                  ≪
                </Button>
              </Grid>
            </Grid>
            <Grid item>{customList(right)}</Grid>
          </Grid>
        </CardContainer>
      </PageContainer>
    </MainSection>
  )
}

import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { GrDocumentPdf } from 'react-icons/gr'
import products from '../db/products.json'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  const rowStyle = {
    backgroundColor: '#E8ECEE',
  }
  const rowStyleClosed = {
    backgroundColor: 'lightpink',
  }

  return (
    <>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        style={row.closed ? rowStyleClosed : rowStyle}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.total_purchased}</TableCell>
        <TableCell align="right">{row.total_withdrawn}</TableCell>
        <TableCell align="right">{row.total_remaining}</TableCell>
        <TableCell align="right">$ {row.total_price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                HISTORIAL
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Fecha</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Operación</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Tienda</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>P. Unitario</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>P. Total</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Cantidad comprada</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Cantidad retirada</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Cantidad restante</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Comprobante</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.operation}</TableCell>
                      <TableCell>{row.store}</TableCell>
                      <TableCell align="right">${historyRow.price}</TableCell>
                      <TableCell align="right">
                        ${(historyRow.price * historyRow.qty_purchased).toFixed(2)}
                      </TableCell>
                      <TableCell align="right">{historyRow.qty_purchased}</TableCell>
                      <TableCell align="right">{historyRow.qty_withdrawn}</TableCell>
                      <TableCell align="right">{historyRow.qty_remaining}</TableCell>
                      <TableCell align="right">
                        <Link href={historyRow.document_link}>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            title="Abrir documento"
                            className="me-4"
                          >
                            <GrDocumentPdf />
                          </a>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function Page2() {
  return (
    <MainSection className="MainSection">
      <Subtitle className="list">Listado de Materiales</Subtitle>
      <PageContainer className="PageContainer">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#E8ECEE' }}>
                <TableCell />
                <TableCell>
                  <strong>MATERIAL</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>COMPRADOS</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>RETIRADOS</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>RESTANTES</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>GASTO TOTAL</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <Row key={product.id} row={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageContainer>
    </MainSection>
  )
}

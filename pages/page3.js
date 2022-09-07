import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AccordionItem from '@/components/Layout/AccordionItem'
import { GrDocumentPdf } from 'react-icons/gr'
import { FcInfo } from 'react-icons/fc'
import { GlobalContext } from '@/context/GlobalContext'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import documents from '@/db/documents.json'

export default function Page3() {
  const facturas = documents.filter((document) => document.type === 'factura')
  const remitos = documents.filter((document) => document.type === 'remito')
  const comprobantes = documents.filter((document) => document.type === 'comprobante')
  const { isAuth } = useContext(GlobalContext)

  return (
    <MainSection className="MainSection">
      {!isAuth ? (
        <PageContainer className="PageContainer">
          Inicia sesión para ver el contenido.
        </PageContainer>
      ) : (
        <>
          <Subtitle>Documentos</Subtitle>
          <PageContainer className="PageContainer">
            <div className="accordion-container">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <strong style={{ fontSize: '1.2rem' }}>Facturas</strong>
                  </Typography>
                </AccordionSummary>
                <Divider />
                {!facturas.length && (
                  <AccordionDetails>
                    <Typography>No hay facturas cargadas.</Typography>
                  </AccordionDetails>
                )}
                {facturas.map((factura) => (
                  <>
                    <AccordionItem>
                      <AccordionDetails key={factura.id}>
                        <Typography>
                          <span>{factura.date}</span> <span>{factura.name}</span>{' '}
                          <span>{factura.store}</span>{' '}
                          <span>
                            <Tooltip title={factura.description}>
                              <IconButton style={{ padding: 0 }}>
                                <FcInfo />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span>
                            <Link href={factura.link}>
                              <a target="_blank" rel="noreferrer" title="Abrir documento">
                                <GrDocumentPdf />
                              </a>
                            </Link>
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </AccordionItem>
                    <Divider />
                  </>
                ))}
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <strong style={{ fontSize: '1.2rem' }}>Remitos</strong>
                  </Typography>
                </AccordionSummary>
                <Divider />
                {!remitos.length && (
                  <AccordionDetails>
                    <Typography>No hay remitos cargados.</Typography>
                  </AccordionDetails>
                )}
                {remitos.map((remito) => (
                  <>
                    <AccordionItem>
                      <AccordionDetails key={remito.id}>
                        <Typography>
                          <span>{remito.date}</span> <span>{remito.name}</span>{' '}
                          <span>{remito.store}</span>{' '}
                          <span>
                            <Tooltip title={remito.description}>
                              <IconButton style={{ padding: 0 }}>
                                <FcInfo />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span>
                            <Link href={remito.link}>
                              <a target="_blank" rel="noreferrer" title="Abrir documento">
                                <GrDocumentPdf />
                              </a>
                            </Link>
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </AccordionItem>
                    <Divider />
                  </>
                ))}
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>
                    <strong style={{ fontSize: '1.2rem' }}>Otros comprobantes</strong>
                  </Typography>
                </AccordionSummary>
                <Divider />
                {!comprobantes.length && (
                  <AccordionDetails>
                    <Typography>No hay otros comprobantes cargados.</Typography>
                  </AccordionDetails>
                )}
                {comprobantes.map((comprobante) => (
                  <>
                    <AccordionItem>
                      <AccordionDetails key={comprobante.id}>
                        <Typography>
                          <span>{comprobante.date}</span> <span>{comprobante.name}</span>{' '}
                          <span>{comprobante.store}</span>{' '}
                          <span>
                            <Tooltip title={comprobante.description}>
                              <IconButton style={{ padding: 0 }}>
                                <FcInfo />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span>
                            <Link href={comprobante.link}>
                              <a target="_blank" rel="noreferrer" title="Abrir documento">
                                <GrDocumentPdf />
                              </a>
                            </Link>
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </AccordionItem>
                    <Divider />
                  </>
                ))}
              </Accordion>
            </div>
          </PageContainer>
        </>
      )}
    </MainSection>
  )
}

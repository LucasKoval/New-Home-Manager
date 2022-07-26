import React from 'react'
import Image from 'next/image'
import { MainSection, PageContainer, ErrorPageContainer, Title } from '@/styles/globalStyles'

export default function Custom404() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <ErrorPageContainer>
          <Title className="notFound">
            Oops!.. <br /> Something went wrong (404)
          </Title>
          <Image src="/img/not-found.gif" alt="Not found" width="480" height="270" />
        </ErrorPageContainer>
      </PageContainer>
    </MainSection>
  )
}

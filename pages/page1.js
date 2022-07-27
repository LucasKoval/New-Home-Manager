import React from 'react'
/* import Loader from 'react-loader-spinner'*/
import { /* BodyContainer, */ MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'

export default function Page1() {
  /*/// Show the spinner when loading the component (NOT_IN_USE)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) {
    return (
      <BodyContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </BodyContainer>
    )
  }
  */

  return (
    <MainSection className="MainSection">
      <Subtitle>Subtitle</Subtitle>
      <PageContainer className="PageContainer">
        <h1>Page 1</h1>
      </PageContainer>
    </MainSection>
  )
}

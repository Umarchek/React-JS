import React from 'react'
import Header from './Components/Header.js'
import CardSection from './Components/CardSection.js'
import { OuterLayout } from './styles/Layouts'
import styled from 'styled-components'
import ChartSection from './Components/ChartSection.js'
import MessagingSection from './Components/MessagingSection.js'
function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection/>
          <ChartSection/>
          <MessagingSection/>
        </MainStyled>
      </OuterLayout>
    </div>
  )
}
const MainStyled = styled.main`

`
export default App
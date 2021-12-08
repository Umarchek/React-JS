import React from 'react'
import Header from './Components/Header.js'
import CardSection from './Components/CardSection.js'
import { OuterLayout } from './styles/Layouts'
import styled from 'styled-components'
function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection/>
        </MainStyled>
      </OuterLayout>
    </div>
  )
}
const MainStyled = styled.main`

`
export default App
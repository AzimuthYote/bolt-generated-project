import styled from 'styled-components'
import Sidebar from './Sidebar'
import FileView from './FileView'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <FileView />
    </AppContainer>
  )
}

export default App

import styled from 'styled-components'
import {Route} from 'react-router-dom'

import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Email from './components/Email'



export default App;


function App() {
  return (
    <App1>
      <Header/>
      <Bio/>
      <Projects/>
      <Footer/>
      <Route path = "/email">
        <Email/>
      </Route>
    </App1>
  );
}

const App1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 100vh;
  background-image: linear-gradient(#528292, #162327);
  color: white;
`
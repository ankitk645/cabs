import './App.css';
import {Nav, Navbar, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Explore} from './Components/Explore';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/explore">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="pricing">Pricing</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </>
      <div>
        <Routes>
          <Route path='/explore' element={<Explore/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;

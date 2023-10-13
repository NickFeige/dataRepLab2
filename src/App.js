
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import {BrowserRouter,Routes,Route}from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#create">create</Nav.Link>
            <Nav.Link href="#read">read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    <Routes>
      <Route path = '/'element={<Content></Content>}></Route>
    </Routes> 
    <Routes>
      <Route path = '/'element={<Header></Header>}></Route>
    </Routes>
    <Routes>
      <Route path = '/'element={<Footer></Footer>}></Route>
    </Routes>        
    </div>
    </BrowserRouter>
    
  );
}

export default App;

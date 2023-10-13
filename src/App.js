// all my imports 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* the nav bar from boot strap  */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">create</Nav.Link>
            <Nav.Link href="/read">read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    {/*the route that connects to other methods   */}
    <Routes>
      <Route path = '/'element={<Content></Content>}></Route>
    </Routes> 
    <Routes>
      <Route path = '/read'element={<Read></Read>}></Route>
    </Routes>
    <Routes>
      <Route path = '/create'element={<Create></Create>}></Route>
    </Routes>        
    </div>
    </BrowserRouter>
    
    
  );
}
// exports to the the page 
export default App;

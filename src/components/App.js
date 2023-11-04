import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";

import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>

        <Navbar expand="lg" className="navbar navbar-dark bg-secondary ">
          <Container>
            <Navbar.Brand href="/" className='fs-3 fw-bold'>AppNotes</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
              <div className="d-flex justify-content-between me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>      

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul> */}

          <Routes>
            <Route index element= {<RequireAuth> <NotesPage/> </RequireAuth> } />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>  
      
  );
}

export default App;

import './TopNavBar.css';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
function TopNavBar() {
  return (
   <NavBar className="navbar" expand="lg">
    <Container>
    <NavBar.Brand className="Logo">NIRANJAN</NavBar.Brand>
    </Container>
   </NavBar>
  );
}
export default TopNavBar;
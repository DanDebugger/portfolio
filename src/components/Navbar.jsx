import { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar 
      expand="lg" 
      className={`fixed-top ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      style={{
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <Container className="position-relative">
        <NavbarBrand as={Link} to="/" className="d-flex align-items-center gap-2 position-absolute">
          <div className="brand-logo">
            <span>DC</span>
          </div>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="position-absolute end-0" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="position-absolute end-0 d-none d-lg-flex align-items-center" style={{ height: '100%' }}>
          <Nav.Link as={Link} to="/contact" className="p-0">
            <Button variant="primary">
              Get In Touch
            </Button>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

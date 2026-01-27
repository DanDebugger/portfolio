import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Navbar, NavbarBrand, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

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
      variant={theme}
      className={`fixed-top ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      style={{
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: 'var(--bg-navbar)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        zIndex: 1050
      }}
    >
      <Container className="position-relative">
        <NavbarBrand as={Link} to="/" className="d-flex align-items-center gap-2">
          <div className="brand-logo">
            <span>DC</span>
          </div>
        </NavbarBrand>
        <div className="d-flex align-items-center gap-2 ms-auto d-lg-none">
          <Button
            variant="link"
            onClick={toggleTheme}
            className="p-1 text-decoration-none"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Toggle Dark Mode"
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'} fs-5`}></i>
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-2 gap-lg-0 my-3 my-lg-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
            <Nav.Link as={Link} to="/tutorials">Tutorials</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Button
              variant="link"
              onClick={toggleTheme}
              className="p-1 text-decoration-none"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle Dark Mode"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'} fs-5`}></i>
            </Button>
            <Nav.Link as={Link} to="/contact" className="p-0">
              <Button style={{
                backgroundColor: 'var(--primary)',
                borderColor: 'var(--primary)',
                color: '#ffffff'
              }}>
                Get In Touch
              </Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

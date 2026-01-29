import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Navbar, NavbarBrand, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
        <NavbarBrand as={Link} to="/" className="d-flex align-items-center gap-2 z-2">
          <div className="brand-logo">
            <span>DC</span>
          </div>
        </NavbarBrand>
        <div className="d-flex align-items-center gap-2 ms-auto d-lg-none z-2">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Links Container */}
          {/* Center Links Container - Absolute Center on Desktop, Stacked on Mobile */}
          <Nav className="nav-center-desktop gap-4 my-3 my-lg-0 align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
            <Nav.Link as={Link} to="/tutorials">Tutorials</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-none d-lg-flex align-items-center gap-3 ms-auto z-2">
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

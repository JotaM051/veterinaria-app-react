import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="logo">
        <Link to="/" style={styles.logoLink}>🐾 Veterinaria Web</Link>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/pets" style={styles.link}>Mis Mascotas</Link></li>
          <li><Link to="/profile" style={styles.link}>Mi Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// ESTILOS ORIGINALES
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    color: 'white'
  },
  logoLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500'
  }
};

export default Header;
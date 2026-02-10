import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.social}>
        <a href="#" style={styles.socialLink}>Facebook</a> | 
        <a href="#" style={styles.socialLink}>Instagram</a> | 
        <a href="#" style={styles.socialLink}>Twitter</a>
        <a href="#" style={styles.socialLink}>© 2026 Veterinaria Web. Todos los derechos reservados.</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem'
  },
  social: {
    marginTop: '0.5rem'
  },
  socialLink: {
    color: '#1abc9c',
    margin: '0 0.5rem',
    textDecoration: 'none'
  }
};

export default Footer;
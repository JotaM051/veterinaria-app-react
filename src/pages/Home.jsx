import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mockData';

const Home = () => {
  const [client, setClient] = useState(mockData.client);
  const { pets } = mockData;

  // SOLO ESTA LÍNEA NUEVA - carga datos guardados
  useEffect(() => {
    const savedData = localStorage.getItem('vetClient');
    if (savedData) {
      setClient(JSON.parse(savedData));
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido, {client.name}! 👋</h1>
      
      <div style={styles.summary}>
        <div style={styles.card}>
          <h3>Mascotas Registradas</h3>
          <p style={styles.number}>{pets.length}</p>
        </div>
        
        <div style={styles.card}>
          <h3>Próxima Cita</h3>
          <p style={styles.number}>20 Feb 2025</p>
          <small>Control anual - Dr. Rodríguez</small>
        </div>
      </div>

      <div style={styles.quickLinks}>
        <Link to="/pets" style={styles.button}>🐕 Mis Mascotas</Link>
        <Link to="/profile" style={styles.button}>👤 Mi Perfil</Link>
      </div>
    </div>
  );
};

// ESTILOS ORIGINALES (igual que antes)
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '2rem'
  },
  summary: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
  },
  card: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center'
  },
  number: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3498db',
    margin: '0.5rem 0'
  },
  quickLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mockData';

const PetList = () => {
  const { pets } = mockData;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mis Mascotas 🐾</h1>
      
      <div style={styles.petGrid}>
        {pets.map(pet => (
          <div key={pet.id} style={styles.petCard}>
            <h3>{pet.name}</h3>
            <p><strong>Especie:</strong> {pet.species}</p>
            <p><strong>Raza:</strong> {pet.breed}</p>
            <p><strong>Edad:</strong> {pet.age} años</p>
            <Link to={`/pet/${pet.id}`} style={styles.detailLink}>Ver perfil completo →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '2rem'
  },
  petGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  petCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #ddd'
  },
  detailLink: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default PetList;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockData } from '../data/mockData';

const PetProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('summary');
  
  // Buscar mascota por ID
  const pet = mockData.pets.find(p => p.id === parseInt(id)) || mockData.pets[0];
  
  // Filtrar vacunas y consultas de esta mascota
  const petVaccines = mockData.vaccines.filter(v => v.petId === parseInt(id));
  const petAppointments = mockData.appointments.filter(a => a.petId === parseInt(id));

  return (
    <div className="container">
      <Link to="/pets" style={{ color: '#3498db', textDecoration: 'none', marginBottom: '20px', display: 'block' }}>
        ← Volver a Mis Mascotas
      </Link>
      
      <div className="card">
        <div style={styles.header}>
          <h1>{pet.name} 🐾</h1>
          <span style={styles.speciesBadge}>{pet.species}</span>
        </div>
        
        {/* Tabs/Navegación */}
        <div style={styles.tabs}>
          <button 
            style={activeTab === 'summary' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('summary')}
          >
            Resumen
          </button>
          <button 
            style={activeTab === 'vaccines' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('vaccines')}
          >
            Vacunas
          </button>
          <button 
            style={activeTab === 'appointments' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('appointments')}
          >
            Consultas
          </button>
        </div>
        
        {/* Contenido de las tabs */}
        <div style={styles.tabContent}>
          {activeTab === 'summary' && (
            <div>
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <strong>Nombre:</strong> {pet.name}
                </div>
                <div style={styles.infoItem}>
                  <strong>Especie:</strong> {pet.species}
                </div>
                <div style={styles.infoItem}>
                  <strong>Raza:</strong> {pet.breed}
                </div>
                <div style={styles.infoItem}>
                  <strong>Edad:</strong> {pet.age} años
                </div>
                <div style={styles.infoItem}>
                  <strong>Peso:</strong> {pet.weight} kg
                </div>
                <div style={styles.infoItem}>
                  <strong>Alergias:</strong> {pet.allergies.join(', ')}
                </div>
                <div style={styles.infoItem}>
                  <strong>Estado:</strong> {pet.status}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'vaccines' && (
            <div>
              <h3>Historial de Vacunas</h3>
              {petVaccines.length > 0 ? (
                <ul style={styles.list}>
                  {petVaccines.map(vaccine => (
                    <li key={vaccine.id} style={styles.listItem}>
                      <strong>{vaccine.name}</strong> - Aplicada: {vaccine.date}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay vacunas registradas.</p>
              )}
            </div>
          )}
          
          {activeTab === 'appointments' && (
            <div>
              <h3>Historial de Consultas</h3>
              {petAppointments.length > 0 ? (
                <ul style={styles.list}>
                  {petAppointments.map(app => (
                    <li key={app.id} style={styles.listItem}>
                      <strong>{app.date}</strong> - {app.reason} (Dr. {app.vet})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay consultas registradas.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  speciesBadge: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '14px'
  },
  tabs: {
    display: 'flex',
    borderBottom: '2px solid #ecf0f1',
    marginBottom: '20px'
  },
  tab: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500'
  },
  activeTab: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '3px solid #3498db',
    color: '#3498db'
  },
  tabContent: {
    minHeight: '200px'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  infoItem: {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px'
  },
  list: {
    listStyle: 'none',
    padding: '0'
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    marginBottom: '5px'
  }
};

export default PetProfile;
import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const ClientProfile = () => {
  // Cargar datos iniciales
  const [client, setClient] = useState(mockData.client);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [tempData, setTempData] = useState({});

  // Cargar datos guardados de LocalStorage al inicio
  useEffect(() => {
    const savedData = localStorage.getItem('vetClient');
    if (savedData) {
      setClient(JSON.parse(savedData));
    }
  }, []);

  const handleEdit = () => {
    setTempData({ ...client });
    setIsEditing(true);
  };

  const handleSave = () => {
    // Guardar en LocalStorage
    localStorage.setItem('vetClient', JSON.stringify(client));
    setIsEditing(false);
    setMessage('¡Cambios guardados exitosamente!');
    
    // Forzar recarga en otras pestañas (opcional)
    window.dispatchEvent(new Event('storage'));
    
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCancel = () => {
    setClient(tempData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h1>Mi Perfil 👤</h1>
      
      {message && (
        <div className="success" style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          {message}
        </div>
      )}
      
      <div className="card">
        <div style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Nombre completo:</label>
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
              placeholder="Tu nombre completo"
            />
          </div>
          
          <div style={styles.field}>
            <label style={styles.label}>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={client.email}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          
          <div style={styles.field}>
            <label style={styles.label}>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={client.phone}
              onChange={handleChange}
              disabled={!isEditing}
              style={styles.input}
              placeholder="+506 8888-8888"
            />
          </div>
          
          <div style={styles.buttonGroup}>
            {!isEditing ? (
              <button onClick={handleEdit} className="btn" style={styles.button}>
                ✏️ Editar Perfil
              </button>
            ) : (
              <>
                <button onClick={handleSave} className="btn" style={{ ...styles.button, backgroundColor: '#2ecc71' }}>
                  💾 Guardar Cambios
                </button>
                <button onClick={handleCancel} className="btn" style={{ ...styles.button, backgroundColor: '#e74c3c' }}>
                  ❌ Cancelar
                </button>
              </>
            )}
          </div>
        </div>
        
        <div style={styles.infoSection}>
          <h3>📊 Información adicional</h3>
          <p>Los cambios se guardan automáticamente en tu navegador (LocalStorage).</p>
          <p>Esta es una simulación - en una app real estos datos se guardarían en una base de datos segura.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '0 auto'
  },
  field: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '30px'
  },
  button: {
    flex: 1
  },
  infoSection: {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    borderLeft: '4px solid #3498db'
  }
};

export default ClientProfile;
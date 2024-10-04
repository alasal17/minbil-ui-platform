// src/pages/ServicesPage.js
import React, { useState, useEffect } from 'react';
import { addService, getServicesByUser, updateService, deleteService } from '../firebase';
import { getAuth } from 'firebase/auth';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
    products: '',
    estimatedTime: '',
  });
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      loadServices();
    }
  }, [user]);

  const loadServices = async () => {
    const servicesData = await getServicesByUser(user.uid);
    setServices(servicesData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddService = async () => {
    try {
      await addService({ ...formData, uid: user.uid });
      setFormData({
        image: '',
        title: '',
        description: '',
        price: '',
        products: '',
        estimatedTime: '',
      });
      setSuccessMessage('Tjenesten er lagt til');
      setShowForm(false);
      loadServices();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleEditService = async () => {
    try {
      await updateService(editingService.id, formData);
      setEditingService(null);
      loadServices();
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      await deleteService(serviceId);
      setConfirmationVisible(false);
      loadServices();
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <div className="services-page">
      <h1>Dine Tjenester</h1>
      <button onClick={() => setShowForm(true)} className="primary-btn">Legg til ny tjeneste</button>
      
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}

      <div className="services-container">
        <table className="services-table">
          <thead>
            <tr>
              <th>Bilde</th>
              <th>Tittel</th>
              <th>Beskrivelse</th>
              <th>Pris</th>
              <th>Produkter</th>
              <th>Estimert Tid</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td><img src={service.image} alt={service.title} /></td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>{service.products}</td>
                <td>{service.estimatedTime}</td>
                <td>
                  <button onClick={() => { setEditingService(service); setFormData(service); setShowForm(true); }} className="edit-btn">Endre</button>
                  <button onClick={() => { setConfirmationVisible(true); }} className="delete-btn">Slett</button>
                  {confirmationVisible && (
                    <div className="popup">
                      <p>Er du sikker på at du vil slette denne tjenesten "{service.title}"?</p>
                      <button onClick={() => handleDeleteService(service.id)} className="delete-btn">Slett</button>
                      <button onClick={() => setConfirmationVisible(false)} className="cancel-btn">Avbryt</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="popup-form">
          <h2>{editingService ? 'Endre Tjeneste' : 'Legg til ny tjeneste'}</h2>
          <input type="file" name="image" onChange={handleInputChange} />
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} disabled={editingService} />
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
          <input type="text" name="products" value={formData.products} onChange={handleInputChange} />
          <input type="text" name="estimatedTime" value={formData.estimatedTime} onChange={handleInputChange} />
          <button onClick={editingService ? handleEditService : handleAddService} className="primary-btn">
            {editingService ? 'Endre' : 'Legg til'}
          </button>
          <button onClick={() => setShowForm(false)} className="cancel-btn">Avbryt</button>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
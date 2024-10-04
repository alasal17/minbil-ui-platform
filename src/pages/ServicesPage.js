// src/pages/ServicesPage.js
import React, { useState, useEffect } from 'react';
import { addService, getServicesByUser, updateService, deleteService } from '../firebase';
import { getAuth } from 'firebase/auth';
import './ServicesPage.css'; // Import the new CSS

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
  const [serviceToDelete, setServiceToDelete] = useState(null);

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
      setShowForm(false);
      loadServices();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditService = async () => {
    try {
      await updateService(editingService.id, formData);
      setEditingService(null);
      loadServices();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteService = async () => {
    try {
      await deleteService(serviceToDelete);
      setServiceToDelete(null);
      setConfirmationVisible(false);
      loadServices();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="services-page">
      <h1>Dine Tjenester</h1>
      <button className="add-service-btn" onClick={() => setShowForm(true)}>Legg til ny tjeneste</button>

      <div className="table-container">
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
                <td><img src={service.image} alt={service.title} className="service-image" /></td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>{service.products}</td>
                <td>{service.estimatedTime}</td>
                <td>
                  <button className="edit-btn" onClick={() => { setEditingService(service); setFormData(service); setShowForm(true); }}>Endre</button>
                  <button className="delete-btn" onClick={() => { setServiceToDelete(service.id); setConfirmationVisible(true); }}>Slett</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="popup signup-popup">
          <div className="signup-popup__content">
            <h2>{editingService ? 'Endre Tjeneste' : 'Legg til ny tjeneste'}</h2>
            <input type="file" name="image" onChange={handleInputChange} />
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} disabled={editingService} placeholder="Tittel" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Beskrivelse"></textarea>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Pris" />
            <input type="text" name="products" value={formData.products} onChange={handleInputChange} placeholder="Produkter" />
            <input type="text" name="estimatedTime" value={formData.estimatedTime} onChange={handleInputChange} placeholder="Estimert Tid" />
            <button className="signup-btn" onClick={editingService ? handleEditService : handleAddService}>
              {editingService ? 'Endre' : 'Legg til'}
            </button>
            <button className="cancel-btn" onClick={() => setShowForm(false)}>Avbryt</button>
          </div>
        </div>
      )}

      {confirmationVisible && (
        <div className="popup signup-popup">
          <div className="signup-popup__content">
            <p>Er du sikker på at du vil slette denne tjenesten?</p>
            <button className="delete-btn" onClick={handleDeleteService}>Slett</button>
            <button className="cancel-btn" onClick={() => setConfirmationVisible(false)}>Avbryt</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
import React, { useState } from 'react';
import './AdoptionCards.css';
import adoptbg from '../assets/adoptbg.png';
import BellaImg from '../assets/Bella.png';
import MaxImg from '../assets/Max.png';
import LunaImg from '../assets/Luna.png';

const AdoptionCards = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    dateOfVisit: '',
  });
  const [errors, setErrors] = useState({});

  const pets = [
    {
      id: 1,
      name: 'Bella',
      description: 'Joyful dog',
      story: 'Bella was rescued from the streets and found her forever home with a loving family. She loves playing in her new backyard.',
      image: BellaImg,
    },
    {
      id: 2,
      name: 'Max',
      description: 'Playful Kitten',
      story: 'Max, a playful kitten, was adopted by a family who had been looking for a furry friend. He enjoys snuggling up on the couch.',
      image: MaxImg,
    },
    {
      id: 3,
      name: 'Luna',
      description: 'Beautiful Dog',
      story: 'Luna was found abandoned and in need of care. She was adopted by a loving couple and enjoys playing fetch in the park.',
      image: LunaImg,
    },
    {
      id: 4,
      name: 'Bella',
      description: 'Joyful dog',
      story: 'Bella was rescued from the streets and found her forever home with a loving family. She loves playing in her new backyard.',
      image: BellaImg,
    },
    {
      id: 5,
      name: 'Max',
      description: 'Playful Kitten',
      story: 'Max, a playful kitten, was adopted by a family who had been looking for a furry friend. He enjoys snuggling up on the couch.',
      image: MaxImg,
    },
    {
      id: 6,
      name: 'Luna',
      description: 'Beautiful Dog',
      story: 'Luna was found abandoned and in need of care. She was adopted by a loving couple and enjoys playing fetch in the park.',
      image: LunaImg,
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      newErrors.firstName = 'First name must contain only letters.';
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      newErrors.lastName = 'Last name must contain only letters.';
    }
    if (!formData.contactNumber.match(/^\d+$/)) {
      newErrors.contactNumber = 'Contact number must contain only digits.';
    }
    if (!formData.address) {
      newErrors.address = 'Address cannot be empty.';
    }
    if (!formData.dateOfVisit) {
      newErrors.dateOfVisit = 'Date of visit cannot be empty.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const errorMessage = Object.values(newErrors).join('\n');
      alert(errorMessage);
      return false;
    }

    return true;
  };

  const handleConfirm = () => {
    if (validateForm()) {
      alert('Form submitted successfully!');
      setIsModalOpen(false);
      setFormData({ firstName: '', lastName: '', contactNumber: '', address: '', dateOfVisit: '' });
    }
  };

  return (
    <div>
      <div className="adoption-header" style={{ backgroundImage: `url(${adoptbg})` }}>
        <h1>Adopt a Friend</h1>
        <p>Discover the joy of adopting a pet and give them a loving home. Our simple process ensures you find the perfect companion.</p>
      </div>

      <div className="cards-container">
        {pets.map((pet) => (
          <div key={pet.id} className={`card ${selectedId === pet.id ? 'card-selected' : ''}`} onClick={() => setSelectedId(pet.id)}>
            <img src={pet.image} alt={pet.name} className="card-image" />
            <h3 className="card-name">{pet.name}</h3>
            <p className="card-description">{pet.description}</p>
            <p className="card-story">{pet.story}</p>
            <button onClick={() => setIsModalOpen(true)} className="adopt-button">Adopt Me</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <img src={selectedId ? pets.find((pet) => pet.id === selectedId).image : ''} alt="Selected Pet" className="modal-image" />
              <div>
                <h2>{selectedId ? pets.find((pet) => pet.id === selectedId).name : 'Adoption Form'}</h2>
                <p>{selectedId ? pets.find((pet) => pet.id === selectedId).description : ''}</p>
              </div>
            </div>

            <hr className="modal-divider" />
            <h2 className="modal-title">Adoption Form</h2>

            <div className="form-group">
              <label>First Name</label>
              <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="text" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Date of Visit</label>
              <input type="date" value={formData.dateOfVisit} onChange={(e) => setFormData({ ...formData, dateOfVisit: e.target.value })} />
            </div>

            <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionCards;

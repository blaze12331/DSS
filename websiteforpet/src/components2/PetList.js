import React, { useEffect, useState } from "react";
import Header from "./Header1";
import "./PetList.css";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
    image: null,
  });
  const [editPet, setEditPet] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 1, name: "Fluffy", breed: "Holland Lop", age: "2 years", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Whiskers", breed: "Siamese", age: "1 year", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Bella", breed: "Persian Cat", age: "3 years", image: "https://via.placeholder.com/150" },
    ];
    setPets(mockData);
  }, []);

  const handleAddPet = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditModal(false);
    setEditPet(null);
  };

  const handleFileChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    const fileURL = file ? URL.createObjectURL(file) : null;

    if (isEdit) {
      setEditPet((prev) => ({ ...prev, image: fileURL }));
    } else {
      setNewPet((prev) => ({ ...prev, image: fileURL }));
    }
  };

  const handleSavePet = () => {
    setPets((prevPets) => [...prevPets, { ...newPet, id: prevPets.length + 1 }]);
    setNewPet({ name: "", breed: "", age: "", description: "", image: null });
    setShowModal(false);
  };

  const handleEditClick = (pet) => {
    setEditPet({ ...pet });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setPets((prevPets) =>
      prevPets.map((pet) => (pet.id === editPet.id ? { ...editPet } : pet))
    );
    handleCloseModal();
  };

  return (
    <div className="pet-list-container">
      <Header />
      
      {/* Pet Count Section */}
      <div className="pet-count">
        <h1 className="pet-count-number">{pets.length}</h1>
        <p className="pet-count-text">Number of Pets Listed for Adoption</p>
      </div>

      {/* Pet Grid */}
      <div className="pet-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <p><strong>Name:</strong> {pet.name}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <div className="pet-buttons">
              <button className="edit-btn" onClick={() => handleEditClick(pet)}>Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
        <div className="add-pet-card" onClick={handleAddPet}>
          <div className="add-icon">+</div>
          <p className="add-text">Add Pet</p>
        </div>
      </div>

      {/* Add Pet Modal */}
      {showModal && (
        <div className="modals-overlay">
          <div className="modals">
            <button className="close-btns" onClick={handleCloseModal}>X</button>
            <h2>Fill Pet Information</h2>
            <div className="modal-content">
              <label>
                Pet Name:
                <input
                  type="text"
                  value={newPet.name}
                  onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                />
              </label>
              <label>
                Age:
                <input
                  type="text"
                  value={newPet.age}
                  onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                />
              </label>
              <label>
                Breed:
                <input
                  type="text"
                  value={newPet.breed}
                  onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                />
              </label>
              <label>
                Add Pet Photos:
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </label>
              {newPet.image && (
  <div className="image-preview-box">
    <p className="image-size-hint">Preview (Max: 150x150 pixels)</p>
    <img src={newPet.image} alt="Preview" className="image-preview" />
  </div>
)}

              <button className="save-btn" onClick={handleSavePet}>Add Pet</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pet Modal */}
      {showEditModal && editPet && (
        <div className="modals-overlay">
          <div className="modals">
            <button className="close-btns" onClick={handleCloseModal}>X</button>
            <h2>Edit Pet Information</h2>
            <div className="modal-content">
              <label>
                Pet Name:
                <input
                  type="text"
                  value={editPet.name}
                  onChange={(e) => setEditPet({ ...editPet, name: e.target.value })}
                />
              </label>
              <label>
                Age:
                <input
                  type="text"
                  value={editPet.age}
                  onChange={(e) => setEditPet({ ...editPet, age: e.target.value })}
                />
              </label>
              <label>
                Breed:
                <input
                  type="text"
                  value={editPet.breed}
                  onChange={(e) => setEditPet({ ...editPet, breed: e.target.value })}
                />
              </label>
              <label>
                Add Pet Photos:
                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, true)} />
              </label>
              {editPet.image && (
                <div className="image-preview-box">
                  <img src={editPet.image} alt="Preview" className="image-preview" />
                </div>
              )}
              <button className="save-btn" onClick={handleSaveEdit}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetList;

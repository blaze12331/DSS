import React, { useEffect, useState } from "react";
import Header1 from "./Header1";
import "./PetList.css";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
    image: null,
  });

  // Mock data for pets
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Fluffy",
        breed: "Holland Lop",
        age: "2 years",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Whiskers",
        breed: "Siamese",
        age: "1 year",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Bella",
        breed: "Persian Cat",
        age: "3 years",
        image: "https://via.placeholder.com/150",
      },
    ];
    setPets(mockData);
  }, []);

  const handleAddPet = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPet({ ...newPet, image: URL.createObjectURL(file) });
  };

  const handleSavePet = () => {
    setPets([...pets, { ...newPet, id: pets.length + 1 }]);
    setNewPet({ name: "", breed: "", age: "", description: "", image: null });
    setShowModal(false);
  };

  return (
    <div className="pet-list-container">
      <Header1 />

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
              <button className="pl-edit-btn">Edit</button>
              <button className="pl-delete-btn">Delete</button>
            </div>
          </div>
        ))}

        {/* Add Pet Card */}
        <div className="pl-add-pet-card" onClick={handleAddPet}>
          <div className="pl-add-icon">+</div>
          <p className="pl-add-text">Add Pet</p>
        </div>
      </div>

      {/* Add Pet Modal */}
      {showModal && (
        <div className="pl-modal-overlay">
          <div className="pl-modal">
            <button className="pl-close-btn" onClick={handleCloseModal}>X</button>
            <h2>Fill Pet Information</h2>

            <div className="pl-modal-content">
              <label>Pet Name:
                <input
                  type="text"
                  value={newPet.name}
                  onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                />
              </label>

              <label>Age:
                <input
                  type="text"
                  value={newPet.age}
                  onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                />
              </label>

              <label>Breed:
                <input
                  type="text"
                  value={newPet.breed}
                  onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                />
              </label>

              <label>Description:
                <textarea
                  value={newPet.description}
                  onChange={(e) => setNewPet({ ...newPet, description: e.target.value })}
                />
              </label>

              <label>Add Pet Photos:
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {newPet.image && (
                  <img src={newPet.image} alt="Preview" className="pl-image-preview" />
                )}
              </label>

              <button className="pl-save-btn" onClick={handleSavePet}>Add Pet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetList;

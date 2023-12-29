import React, { useState } from "react";

function AddCar() {
  const [car, setCar] = useState({
    name: "",
    model: "",
    year: "",
    rent_per_day: "",
    specifications: {
      number_of_doors: "",
      number_of_people: "",
      transmission: "automatic",
      number_of_bags: "",
    },
  });
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name in car) {
      setCar({ ...car, [name]: value });
    } else {
      setCar({
        ...car,
        specifications: { ...car.specifications, [name]: value },
      });
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    formData.append("name", car.name);
    formData.append("model", car.model);
    formData.append("year", car.year);
    formData.append("rent_per_day", car.rent_per_day);

    // Convert specifications object to JSON string and append it to formData
    formData.append(
      "specifications[number_of_doors]",
      car.specifications.number_of_doors
    );
    formData.append(
      "specifications[number_of_people]",
      car.specifications.number_of_people
    );
    formData.append(
      "specifications[transmission]",
      car.specifications.transmission
    );
    formData.append(
      "specifications[number_of_bags]",
      car.specifications.number_of_bags
    );

    fetch("http://localhost:4000/api/cars", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Server Response:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="add-car">
      <h2>Add Car</h2>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Image:</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Model:</label>
            <input
              type="text"
              className="form-control"
              name="model"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Year:</label>
            <input
              type="number"
              className="form-control"
              name="year"
              min="0"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Rent per day:</label>
            <input
              type="number"
              className="form-control"
              name="rent_per_day"
              min="0"
              onChange={handleChange}
            />
          </div>

          <h3>Specifications:</h3>

          <div className="mb-3">
            <label className="form-label">Number of doors:</label>
            <input
              type="number"
              className="form-control"
              name="number_of_doors"
              min="0"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Number of people:</label>
            <input
              type="number"
              className="form-control"
              name="number_of_people"
              min="0"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Transmission:</label>
            <select
              className="form-select"
              name="transmission"
              onChange={handleChange}
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Number of bags:</label>
            <input
              type="number"
              className="form-control"
              name="number_of_bags"
              min="0"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PatientDto } from '../../../Interfaces';

const PatientTable = () => {
  const [patients, setPatients] = useState<PatientDto[]>([]);
  const [editingPatientId, setEditingPatientId] = useState<number>(-1);
  const [updatedData, setUpdatedData] = useState<PatientDto>();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('https://localhost:7180/api/Patient'); // Replace this URL with your actual Web API endpoint.
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setPatients(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleDelete = (id: number) => {
    // Implement the delete functionality as needed.
    console.log(`Delete patient with ID ${id}`);
  };

  const handleEdit = (id: number) => {
    // Set the editingPatientId to the ID of the patient being edited.
    setEditingPatientId(id);

    // Find the patient to be edited from the patients array.
    const patientToEdit = patients.find((patient) => patient.id === id);

    // Set the initial updated data with the patient's current data.
    setUpdatedData(patientToEdit);
  };

  const handleCancel = () => {
    // Reset the editingPatientId and updatedData when canceling the edit.
    setEditingPatientId(-1);
    setUpdatedData(undefined);
  };

  const handleSave = () => {
    // Perform the save logic here (e.g., update the patient on the server).
    // For this example, we'll just update the local patients array for demonstration purposes.
    console.log(updatedData);
    const updatedPatients = patients.map((patient) => {
      if (patient.id === editingPatientId) {
        return { ...patient, ...updatedData };
      }
      return patient;
    });
    setPatients(updatedPatients);
    setEditingPatientId(-1);
    setUpdatedData(undefined);
  };

  const handleChange = (e: any) => {
    // Update the changed data in the updatedData object.
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }) as PatientDto);
  };

 function date_TO_String(_date: Date): string {
  const date = new Date(_date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedData?.name ?? patient.name}
                    onChange={handleChange}
                  />
                ) : (
                  patient.name
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="text"
                    name="email"
                    value={updatedData?.email ?? patient.email}
                    onChange={handleChange}
                  />
                ) : (
                  patient.email
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="text"
                    name="phone"
                    value={updatedData?.phone ?? patient.phone}
                    onChange={handleChange}
                  />
                ) : (
                  patient.phone
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="text"
                    name="address"
                    value={updatedData?.address ?? patient.address}
                    onChange={handleChange}
                  />
                ) : (
                  patient.address
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="text"
                    name="gender"
                    value={updatedData?.gender ?? patient.gender}
                    onChange={handleChange}
                  />
                ) : (
                  patient.gender
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={updatedData?.dateOfBirth != null? date_TO_String(updatedData.dateOfBirth) : date_TO_String(patient.dateOfBirth)}
                    onChange={handleChange}
                  />
                ) : (
                  new Date(patient.dateOfBirth).toLocaleDateString()
                )}
              </td>
              <td>
                {editingPatientId === patient.id ? (
                  <>
                    <button className="btn btn-success mr-2 m-1" onClick={handleSave}>
                      Save
                    </button>
                    <button className="btn btn-secondary m-1" onClick={handleCancel}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary m-1" onClick={() => handleEdit(patient.id)}>
                    Edit
                  </button>
                )}
                <button className="btn btn-danger ml-2 m-1" onClick={() => handleDelete(patient.id)}>
                  Delete
                </button>
                <Link to={`/NewPatientForm`}>
                  <button className="btn btn-success ml-2 m-1" onClick={() => handleDelete(patient.id)}>
                    Add
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;

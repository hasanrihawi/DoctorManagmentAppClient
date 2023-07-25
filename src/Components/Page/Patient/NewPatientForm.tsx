import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewPatientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        dateOfBirth: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch('https://localhost:7180/api/Patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                toast.error('Error creating patient.');
            }
            else {
                toast.success('Patient created successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    gender: '',
                    dateOfBirth: '',
                });
            }

        } catch (error) {
            toast.error('Error creating patient.');
            console.error('Error creating patient:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create New Patient</h2>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="button" onClick={handleSave} className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default NewPatientForm;

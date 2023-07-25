import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { PatientDto } from '../../../Interfaces';

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

    const [errors, setErrors] = useState<any>({});

    const handleBlur = (e: any) => {
        const { name, value } = e.target;
        const validationErrors : any = {};
    
        if (name === 'name' && !value.trim()) {
          validationErrors.name = 'Name is required.';
        }
        if (name === 'email') {
          if (!value.trim()) {
            validationErrors.email = 'Email is required.';
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            validationErrors.email = 'Invalid email format.';
          }
        }
        if (name === 'phone' && !value.trim()) {
          validationErrors.phone = 'Phone is required.';
        }
        if (name === 'gender' && !value.trim()) {
          validationErrors.gender = 'Gender is required.';
        }
        if (name === 'dateOfBirth' && !value.trim()) {
          validationErrors.dateOfBirth = 'Date of Birth is required.';
        }
    
        setErrors(validationErrors);
      };

    const handleSave = async () => {
        // Perform client-side validation before saving.
        const validationErrors : any = {};
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format.';
        }
        if (!formData.phone.trim()) {
            validationErrors.phone = 'Phone is required.';
        }
        if (!formData.gender.trim()) {
            validationErrors.gender = 'Gender is required.';
        }
        if (!formData.dateOfBirth) {
            validationErrors.dateOfBirth = 'Date of Birth is required.';
        }

        if (Object.keys(validationErrors).length > 0) {
            // Display validation errors and prevent saving.
            setErrors(validationErrors);
        } else {
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
                        onBlur={handleBlur}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
                        className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
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

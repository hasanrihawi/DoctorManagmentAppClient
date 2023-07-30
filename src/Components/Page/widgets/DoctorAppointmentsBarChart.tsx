import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { DoctorDto } from '../../../Interfaces';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const DoctorAppointmentsBarChart = () => {
    const [doctors, setDoctors] = useState<DoctorDto[]>([]);

    useEffect(() => {
        // Fetch doctors and their appointments from the API
        axios.get('https://localhost:7180/api/Doctor')
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Extract doctors' names and appointment counts for the chart data
    const chartData = {
        labels: doctors.map((doctor) => doctor.name),
        datasets: [
            {
                label: 'Appointments',
                data: doctors.map((doctor) => doctor.appointments.length),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                  borderWidth: 1
            },
        ],
    };

    return (
        <div>
            <h2>Doctors and Appointments Chart</h2>
            <div className="row p-2 m-0">
                {/* <div className="container mt-5"> */}
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    //   stepSize: 1,
                                },
                            },
                        }}
                    />
                {/* </div> */}
            </div>
        </div>
    );
};

export default DoctorAppointmentsBarChart;

import React from "react";
import PatientTable from "../Components/Page/Patient/PatientTable";
import DoctorAppointmentsBarChart from "../Components/Page/widgets/DoctorAppointmentsBarChart";

function Home() {
  return (
    <div className="container muiltr-1aat207 ps" style={{ position: 'relative' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32">

        <div className="sm:col-span-2 lg:col-span-3">
          <DoctorAppointmentsBarChart />
        </div>
        <div className="sm:col-span-2 lg:col-span-1 ">
          <DoctorAppointmentsBarChart />
        </div>
        {/* <div className="container mt-5 flex-fill">
          <DoctorAppointmentsBarChart />
        </div>
        <div className="container mt-5 flex-fill">
          <DoctorAppointmentsBarChart />
        </div> */}

      </div>
    </div>
  );
}

export default Home;
